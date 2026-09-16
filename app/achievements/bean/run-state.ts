export type RunState = {
  version: 1;
  elapsedMs: number;
  runningSince: number | null;
  splits: (number | null)[];
};

export type RunAction = { type: 'toggle' } | { type: 'split'; index: number } | { type: 'reset' };

export function newRun(): RunState {
  return { version: 1, elapsedMs: 0, runningSince: null, splits: Array(5).fill(null) };
}

export function elapsedAt(run: RunState, now: number): number {
  return run.elapsedMs + (run.runningSince === null ? 0 : Math.max(0, now - run.runningSince));
}

export function transition(run: RunState, action: RunAction, now: number): RunState {
  if (action.type === 'reset') return newRun();
  if (action.type === 'toggle') {
    return run.runningSince === null
      ? { ...run, runningSince: now }
      : { ...run, elapsedMs: elapsedAt(run, now), runningSince: null };
  }
  if (!Number.isInteger(action.index) || action.index < 0 || action.index >= run.splits.length) return run;
  if (run.runningSince === null && run.elapsedMs === 0) return run;
  return { ...run, splits: run.splits.map((split, index) => index === action.index ? elapsedAt(run, now) : split) };
}

function validMilliseconds(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;
}

export function restoreRun(raw: string | null, now: number): { run: RunState; invalid: boolean } {
  if (raw === null) return { run: newRun(), invalid: false };
  try {
    const value = JSON.parse(raw);
    if (!value || value.version !== 1 || !validMilliseconds(value.elapsedMs)
      || (value.runningSince !== null && (!validMilliseconds(value.runningSince) || value.runningSince > now))
      || !Array.isArray(value.splits) || value.splits.length !== 5) {
      return { run: newRun(), invalid: true };
    }
    const elapsed = elapsedAt(value, now);
    if (!validMilliseconds(elapsed) || !value.splits.every((split: unknown) => split === null || (validMilliseconds(split) && split <= elapsed))) {
      return { run: newRun(), invalid: true };
    }
    return { run: { version: 1, elapsedMs: value.elapsedMs, runningSince: value.runningSince, splits: [...value.splits] }, invalid: false };
  } catch {
    return { run: newRun(), invalid: true };
  }
}

export function formatElapsed(ms: number): string {
  const tenths = Math.floor(Math.max(0, Number.isFinite(ms) ? ms : 0) / 100);
  const seconds = Math.floor(tenths / 10);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  return `${hours ? `${hours}:` : ''}${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}.${tenths % 10}`;
}
