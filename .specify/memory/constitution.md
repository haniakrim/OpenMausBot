# Constitution

A summary of conventions already written down in [`AGENTS.md`](../../AGENTS.md) and
[`CONTRIBUTING.md`](../../CONTRIBUTING.md). Those files are the source; when they change, this one
follows.

## Verification

- Before claiming a server or conversation change works, follow
  `devops/docs/agent-app/verification/README.md`.
- Always launch an isolated fixture. Never verify mutations against the user's live app or data.
- Tests never touch the real `~/.openmausbot`; no sleeps, wait on the event that proves the behaviour.

## Comments

- Comment only what the code cannot say: license or attribution notices, facts forced by something
  outside the code (with its version), doc comments of public contracts, links to upstream issues,
  security invariants or known open risks.
- No narration, history, pointers to other files, banners or commented-out code. A rule belongs in
  a type, a test or a lint rule. Never suppress a lint rule that guards correctness.
- A more specific `AGENTS.md` overrides the root one within its directory.

## Code

- TypeScript with `strict` enabled (`fe/desktop/tsconfig.json`, `be/ai/tsconfig.server.json`).
- Small, focused PRs; no new runtime dependency without a stated reason.
- The harness (`be/ai/server/`) stays portable Node; macOS-only code lives in `fe/desktop/electron/`
  behind a platform gate.
- Never build command strings for a shell; arguments travel through argv.
- API keys are write-only: never logged, echoed or placed in argv.

## Gates

`pnpm typecheck`, `pnpm lint` and `pnpm test` pass before a PR. New server behaviour has a test.
