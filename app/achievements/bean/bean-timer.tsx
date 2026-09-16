'use client';

import { useEffect, useRef, useState } from 'react';
import { elapsedAt, formatElapsed, newRun, restoreRun, transition } from './run-state';
import type { RunAction } from './run-state';
import styles from './bean.module.css';

const STORAGE_KEY = 'howtofish.bean.run.v1';
const HOUR = 60 * 60 * 1000;
const stages = ['Lighthouse', 'Forest', 'Coastal island', 'Settlement', 'Volcano'];

export function BeanTimer() {
  const [run, setRun] = useState(newRun);
  const runRef = useRef(run);
  const [now, setNow] = useState(0);
  const [ready, setReady] = useState(false);
  const [warning, setWarning] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Defer browser-only hydration until after the server-rendered first frame.
    const frame = requestAnimationFrame(() => {
      const timestamp = Date.now();
      try {
        const restored = restoreRun(localStorage.getItem(STORAGE_KEY), timestamp);
        runRef.current = restored.run;
        setRun(restored.run);
        if (restored.invalid) setWarning('The saved run could not be read. A fresh timer is ready.');
      } catch {
        setWarning('Browser storage is unavailable. This run will work here, but will not survive a reload.');
      }
      setNow(timestamp);
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready || run.runningSince === null) return;
    const interval = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(interval);
  }, [ready, run.runningSince]);

  useEffect(() => {
    if (confirmReset) cancelRef.current?.focus();
  }, [confirmReset]);

  function act(action: RunAction) {
    if (!ready) return;
    const timestamp = Date.now();
    const next = transition(runRef.current, action, timestamp);
    runRef.current = next;
    setRun(next);
    setNow(timestamp);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      setWarning('This run could not be saved. Keep this tab open to retain your progress.');
    }
    if (action.type === 'split') setAnnouncement(`${stages[action.index]} recorded at ${formatElapsed(elapsedAt(next, timestamp))}.`);
    if (action.type === 'toggle') setAnnouncement(next.runningSince === null ? 'Practice timer paused.' : 'Practice timer running.');
    if (action.type === 'reset') {
      setAnnouncement('Timer and all five splits cleared.');
      setConfirmReset(false);
      toggleRef.current?.focus();
    }
  }

  const elapsed = elapsedAt(run, now);
  const running = run.runningSince !== null;
  const hasProgress = running || elapsed > 0 || run.splits.some(split => split !== null);
  const overLimit = elapsed >= HOUR;
  const status = !ready ? 'Loading your saved run…'
    : overLimit ? 'One hour reached. Continue recording for practice; check the game for the achievement result.'
    : running ? `${formatElapsed(HOUR - elapsed)} left on the one-hour reference clock.`
    : elapsed > 0 ? 'Paused for practice. Resume when you are ready.'
    : 'Ready for a fresh attempt. Start when you begin your run.';

  return <>
    <section id="timer" className={styles.section} aria-labelledby="timer-heading">
      <h2 id="timer-heading">Your run timer</h2>
      <div className={`${styles.timerPanel} ${overLimit ? styles.overtime : ''}`}>
        <div className={styles.clock} role="timer" aria-label="Elapsed practice time" aria-live="off">{formatElapsed(elapsed)}</div>
        <p className={styles.timerStatus}>{status}</p>
        <div className={styles.actions}>
          <button ref={toggleRef} type="button" className={styles.primaryButton} disabled={!ready} onClick={() => act({ type: 'toggle' })}>
            {running ? 'Pause timer' : elapsed > 0 ? 'Resume timer' : 'Start timer'}
          </button>
          <button ref={resetRef} type="button" className={styles.button} disabled={!ready || !hasProgress} onClick={() => setConfirmReset(true)}>Reset run</button>
        </div>
        {confirmReset && <div className={styles.resetPrompt} role="group" aria-label="Confirm run reset">
          <p>Clear this timer and all recorded splits?</p>
          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={() => act({ type: 'reset' })}>Clear run</button>
            <button ref={cancelRef} type="button" className={styles.button} onClick={() => { setConfirmReset(false); resetRef.current?.focus(); }}>Keep run</button>
          </div>
        </div>}
        <progress className={styles.progress} max={HOUR} value={Math.min(elapsed, HOUR)} aria-label="Elapsed share of one hour" />
        <p className={styles.small}>Saved in this browser. Pausing is a practice feature; it does not pause the game or certify an achievement. The game&apos;s exact timing boundaries are pending verification.</p>
        {warning && <p className={styles.storageWarning} role="status">{warning}</p>}
        <span className={styles.srOnly} role="status">{announcement}</span>
      </div>
    </section>

    <section id="splits" className={styles.section} aria-labelledby="splits-heading">
      <h2 id="splits-heading">Five-stage split tracker</h2>
      <p>Use these slots to record your practice run. The stage labels follow a historical community report; current checkpoint triggers and recommended times are still <a href="#sources">pending verification</a>.</p>
      <div className={styles.splits}>
        {stages.map((stage, index) => <article key={stage} className={`${styles.splitRow} ${run.splits[index] !== null ? styles.recorded : ''}`} aria-labelledby={`stage-${index}`}>
          <span className={styles.stageNumber} aria-hidden="true">{index + 1}</span>
          <div className={styles.stageCopy}><h3 id={`stage-${index}`}>{stage}</h3><p>Checkpoint: pending verification</p></div>
          <div className={styles.target}><span>Target</span><strong>Pending verification</strong></div>
          <output className={styles.splitTime} aria-label={`${stage} recorded time`}>{run.splits[index] === null ? '—' : formatElapsed(run.splits[index])}</output>
          <button type="button" className={styles.button} disabled={!ready || !hasProgress} aria-label={`Mark ${stage} split`} onClick={() => act({ type: 'split', index })}>Mark split</button>
        </article>)}
      </div>
      <p className={styles.note}><strong>Your records, not official checkpoints.</strong> Marking again replaces that stage&apos;s time. No ahead/behind judgment is shown until target times are verified. The last split does not stop the timer automatically.</p>
    </section>
  </>;
}
