# Fix the bug and prove it

A claims-status helper works for the developer account but exposes another user’s claim in one edge case. The existing tests are green.

In the reported incident, viewer `user-4` was shown claim `claim-B`, which belongs to `user-42` (see `docs/contract.md`).

**What you'll practise:** test-first bug fixing with Claude Code. Reproduce the bug with a failing regression test *before* changing the code, then fix it and show that the same test now passes.

**In the course slides:** Chapter 2, Lesson 1 (Give Claude a feedback loop): for bug fixes the failing test comes first, then the fix, without editing the test.

## Task

1. Read `docs/contract.md` and reproduce the incident.
2. Add a regression test under `tests/student/` using Node’s test runner. Replace the placeholder in `tests/student/regression.test.mjs`; test files must end in `.test.mjs`.
3. Run the same test on the original starter code, before you change `src/claims.mjs`, and confirm it fails for the intended reason (`user-4` receives `claim-B`): `node --test tests/student/*.test.mjs`
4. Fix `src/claims.mjs`, rerun your regression and the baseline, then submit both: `node --test tests/*.test.mjs tests/student/*.test.mjs`

A good way to work: ask Claude to write the failing test and run it, check the failure yourself, and only then ask for the fix.

## Working rules

Edit only `src/claims.mjs` and `tests/student/**`. No dependencies, workflow edits, skipped assertions or test-runner replacements.

The grader runs `getClaim` in an isolated sandbox without Node APIs, so keep it a self-contained pure function: no imports, no `console`. It runs your `tests/student/` tests with only `src/claims.mjs` next to them. Use Node 22.

## Acceptance

- Only an exact authorized owner receives a claim.
- Whitespace is normalized consistently and malformed IDs cannot match.
- The student regression fails on the original and passes on the fix.
- Missing records return null; the input list and records remain unchanged.

## Done when

- `node --test tests/student/*.test.mjs` failed before your fix and passes after it.
- `node --test tests/*.test.mjs tests/student/*.test.mjs` passes.
- Only `src/claims.mjs` and files under `tests/student/` changed.

## How to submit

1. Fork this repository to your personal GitHub account. Use fictional information
   only, keep the fork public, and keep `main` as its default branch. In your fork's
   **Actions** tab, click **I understand my workflows, go ahead and enable them** if shown.
2. On the lab page, use **Connect GitHub for scoring** to install the read-only grading
   App on your fork, then **Recheck connection**.
3. Download the TensorLearn connector from the lab page and extract it outside your fork.
   From your fork folder, run the page's `--code` connection command and paste your token
   only into the hidden terminal prompt. This opens a Claude Code session connected to the lab.
4. In that session, run `/load`. Run `/load` again after your instructor launches the round.
5. Create a branch such as `bug-fix/first-draft` and complete the task above. Change only the
   files the task allows: any other change, including `CLAUDE.md`, `.claude/` settings or
   agents, or notes files, makes the submission invalid.
6. Commit and push your branch. Open a PR **inside your own fork**, targeting its `main`
   branch (GitHub may suggest the upstream repository: select your fork instead). Check
   that **Check bug-fix submission** starts in the PR's checks. Keep the PR open; no merge
   is required.
7. Run **`/submit`** in the connected Claude Code session, then `/check` (or refresh the
   lab page) to read your saved score. The Actions run is useful feedback, but it does not
   submit your work.

A change to your answer needs a new commit, push and `/submit`. Keep `main` unchanged:
the grader compares your PR with the released starter.

## What is graded

The pinned grader in `.github/workflows/grade.yml` reads your files as data and runs your
code only in an isolated, offline container. Every check is a fixed rule; no AI model
judges your work. Your score is out of 100. Your facilitator separately reviews
clarity and reasoning.

- 24 function cases checked against the documented contract.
- Your regression test fails on the original code and passes on your fix.
- Critical ownership cases cap the score at 25/100; a missing regression test caps it at 70/100.
