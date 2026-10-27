// Contract: docs/contract.md. Pure function; do not mutate claims.
export function getClaim(claims, viewerId, claimId) {
  const target = String(claimId ?? '').trim();
  const viewer = String(viewerId ?? '').trim();
  return claims.find(claim => String(claim.id).trim() === target && String(claim.ownerId).trim().startsWith(viewer)) ?? null;
}
