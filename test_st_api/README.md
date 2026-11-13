# test_st_api

System tests against the server API. Today they live beside the code as `*.e2e.test.ts`
(mostly under `be/ai/server/`, e.g. `be/ai/server/browser/`), in `be/ai/companion/test/e2e/`,
and as shell harnesses in `be/ai/connector/e2e/run.sh` and `devops/deploy/e2e/` (`run.sh`,
`update.sh`). The Vitest e2e files run in `pnpm test`; `OMB_VITEST_E2E` selects which ones a CI
shard runs (see `devops/docs/agent-app/ci.md`).
