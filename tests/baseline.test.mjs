import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../src/claims.mjs';
test('owner can view own claim', () => {
 const claim={id:'claim-A',ownerId:'user-42',status:'pending'};
 assert.deepEqual(getClaim([claim],'user-42','claim-A'),claim);
});
test('missing claim returns null', () => assert.equal(getClaim([], 'user-42','missing'),null));
