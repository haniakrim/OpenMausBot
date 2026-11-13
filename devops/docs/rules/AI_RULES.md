# AI rules

The single rulebook for agents working in this repository. It points to the files that hold the
rules rather than restating them.

1. [`AGENTS.md`](../../../AGENTS.md): verification in an isolated fixture and the comments policy.
   More specific `AGENTS.md` files (for example [`fe/docs-site/AGENTS.md`](../../../fe/docs-site/AGENTS.md))
   override it within their directories.
2. [`CONTRIBUTING.md`](../../../CONTRIBUTING.md): dev setup, repo map, test house rules, data-format
   changes, platform rules, secrets and the pre-PR checklist.
3. [`devops/docs/agent-app/verification/README.md`](../agent-app/verification/README.md): how to
   prove a server or conversation change works without touching the user's live app or data.
4. [`QA_STRATEGY.md`](QA_STRATEGY.md): where tests live today and which gates must pass.

Summary of the non-negotiables:

- Launch an isolated fixture for verification; never mutate the user's live app or data.
- Follow the comments policy in `AGENTS.md`.
- `pnpm typecheck`, `pnpm lint` and `pnpm test` pass (`make typecheck`, `make lint`, `make test`).
