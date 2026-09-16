import assert from 'node:assert/strict';
import test from 'node:test';

// Import dynamically so the first red run identifies the missing behavior.
const modulePath = './run-state.ts';
const state = await import(modulePath).catch(() => null);

test('elapsed time survives a delayed render and pause/resume', () => {
  assert.ok(state, 'Persistent run-state behavior has not been implemented');
  const started = state.transition(state.newRun(), { type: 'toggle' }, 1000);
  assert.equal(state.elapsedAt(started, 6500), 5500);
  const paused = state.transition(started, { type: 'toggle' }, 6500);
  assert.equal(state.elapsedAt(paused, 90000), 5500);
  const resumed = state.transition(paused, { type: 'toggle' }, 20000);
  assert.equal(state.elapsedAt(resumed, 24000), 9500);
});

test('recording replaces only the chosen split and reset clears all progress', () => {
  assert.ok(state, 'Split recording has not been implemented');
  const empty = state.newRun();
  assert.deepEqual(state.transition(empty, { type: 'split', index: 2 }, 2000), empty);
  const started = state.transition(empty, { type: 'toggle' }, 1000);
  const marked = state.transition(started, { type: 'split', index: 2 }, 2500);
  assert.deepEqual(marked.splits, [null, null, 1500, null, null]);
  assert.deepEqual(state.transition(marked, { type: 'split', index: 2 }, 3000).splits, [null, null, 2000, null, null]);
  assert.deepEqual(state.transition(marked, { type: 'split', index: 5 }, 3000), marked);
  assert.deepEqual(state.transition(marked, { type: 'reset' }, 4000), empty);
  assert.deepEqual(started.splits, [null, null, null, null, null]);
});

test('restoring a running timer includes time spent away from the page', () => {
  assert.ok(state, 'Restore behavior has not been implemented');
  const raw = JSON.stringify({ version: 1, elapsedMs: 5000, runningSince: 1000, splits: [2000, null, null, null, null] });
  const restored = state.restoreRun(raw, 61000);
  assert.equal(restored.invalid, false);
  assert.equal(state.elapsedAt(restored.run, 61000), 65000);
  assert.equal(restored.run.splits[0], 2000);
  const paused = state.transition(restored.run, { type: 'toggle' }, 61000);
  assert.equal(state.elapsedAt(state.restoreRun(JSON.stringify(paused), 90000).run, 90000), 65000);
});

test('corrupt and incompatible persisted state cannot poison the timer', () => {
  assert.ok(state, 'Storage validation has not been implemented');
  const valid = { version: 1, elapsedMs: 1000, runningSince: null, splits: [100, null, null, null, null] };
  for (const raw of ['{', 'null', '[]', JSON.stringify({ ...valid, version: 2 }),
    JSON.stringify({ ...valid, elapsedMs: -1 }), JSON.stringify({ ...valid, elapsedMs: '100' }),
    JSON.stringify({ ...valid, runningSince: 99999 }), JSON.stringify({ ...valid, runningSince: -1 }),
    JSON.stringify({ ...valid, splits: [0] }), JSON.stringify({ ...valid, splits: [2000, null, null, null, null] }),
    '{"version":1,"elapsedMs":1e999,"runningSince":null,"splits":[null,null,null,null,null]}']) {
    assert.deepEqual(state.restoreRun(raw, 5000), { run: state.newRun(), invalid: true });
  }
  assert.deepEqual(state.restoreRun(null, 5000), { run: state.newRun(), invalid: false });
});

test('the display handles zero, the hour boundary and overtime without wrapping', () => {
  assert.ok(state, 'Timer formatting has not been implemented');
  for (const [ms, expected] of [[0, '00:00.0'], [61999, '01:01.9'], [3599999, '59:59.9'], [3600000, '1:00:00.0'], [3661200, '1:01:01.2'], [-2, '00:00.0']]) {
    assert.equal(state.formatElapsed(ms), expected);
  }
});
