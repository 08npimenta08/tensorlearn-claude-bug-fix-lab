# Fix the bug and prove it

A claims-status helper works for the developer account but exposes another user’s claim in one edge case. The existing tests are green.

## Task

1. Read `docs/contract.md` and reproduce the incident.
2. Add a regression test under `tests/student/` using Node’s test runner.
3. Run the same test on the pinned original starter and confirm it fails for the intended reason.
4. Fix `src/claims.mjs`, rerun your regression and the baseline, then submit both.

## Working rules

Edit only `src/claims.mjs` and `tests/student/**`. No dependencies, workflow edits, skipped assertions or test-runner replacements. The restricted authoring profile exposes scoped patching and named test operations. Candidate tests run in a separate credential-free worker.

## Acceptance

- Only an exact authorized owner receives a claim.
- Whitespace is normalized consistently and malformed IDs cannot match.
- The student regression fails on the original and passes on the fix.
- Missing records return null; the input list and records remain unchanged.

## How to submit

1. Fork this repository to your personal GitHub account. Use fictional information
   only, keep the fork public, and keep `main` as its default branch.
2. Clone your fork and enable GitHub Actions in its **Actions** tab. Use **Connect
   GitHub for scoring** on the lab page to install the read-only grading App on your
   fork. Return to the lab and use **Recheck connection** if needed.
3. Download the TensorLearn client from the lab page and extract it outside your fork.
   Follow the page's connection command from your fork folder. Paste your learner
   token only into the hidden terminal prompt. Run `/load` from your fork folder to
   connect the repository. Run `/load` again after the facilitator launches the round.
4. Create a branch such as `bug-fix/first-draft` and complete the task above. Change
   only the files the task allows; any other change makes the submission invalid.
5. Commit and push your branch. Open a PR **inside your own fork**, targeting its
   `main` branch. GitHub may suggest the upstream repository: select your fork instead.
   Opening or updating this PR starts the checks automatically.
6. Keep the PR open. When ready, run **`/submit`** in the connected Claude Code session
   to submit that exact pushed revision for the current round. **No merge is required.**
7. Use `/check` or refresh the lab page to read the saved result. The Actions run and
   `lab-score/score.json` are useful feedback, but an Actions check alone does not
   submit your work or prove that the server saved a score.

A change to your answer requires a new commit, push, and explicit `/submit`. Keep
`main` unchanged: the grader compares your PR with the released starter.

## What is graded

The pinned grader in `.github/workflows/grade.yml` reads your files as data and runs
your code only in an isolated, offline container. Every check is a fixed rule; no AI
model judges your work. Your facilitator separately reviews clarity and reasoning.

- 24 function cases checked against the documented contract.
- Your regression test fails on the original code and passes on your fix.
- Critical ownership cases cap the score at 25/100; a missing regression test caps it at 70/100.
