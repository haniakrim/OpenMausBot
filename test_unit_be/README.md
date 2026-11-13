# test_unit_be

Backend unit tests. Today they are colocated with the code as `*.test.ts` under `be/ai/**`
(mostly `be/ai/server/`, plus `be/ai/shared/`, `be/ai/companion/`, `be/ai/connector/`,
`be/ai/enterprise/` and `be/ai/evals/`). `pnpm test` runs them with Vitest using
`fe/desktop/vite.config.ts` from the repo root; `make test-unit-be` runs only `be/ai`.
The Composio broker has its own config (`pnpm broker:test`).
