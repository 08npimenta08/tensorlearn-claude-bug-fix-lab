# Claim lookup contract
`getClaim(claims, viewerId, claimId)` accepts an array of records `{id, ownerId, status}` and two IDs.
IDs must be nonempty strings. Trim surrounding whitespace on all IDs, but preserve case and leading zeroes. Do not coerce numbers, objects, null or booleans into IDs. A record with malformed id or ownerId cannot match.
Return the matching record only when BOTH normalized id and normalized ownerId exactly match. Return null for no match, malformed inputs, or a non-array records value. Do not mutate input objects. Multiple different owners may use overlapping textual account identifiers.
Incident: signed-in viewer `user-4` received claim `claim-B`, owned by `user-42`. The log contains no private claim data; these are synthetic IDs.
