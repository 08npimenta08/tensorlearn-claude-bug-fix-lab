import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
test('viewer user-4 cannot see claim-B owned by user-42 (prefix-overlapping owner IDs)', () => {
  const claim = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.equal(getClaim([claim], 'user-4', 'claim-B'), null);
});
