# QA strategy

How tests are organised today. The details of CI job selection and sharding are in
[`devops/docs/agent-app/ci.md`](../agent-app/ci.md).

## Where tests live

| Kind | Location | Runner |
|---|---|---|
| Backend unit | colocated `*.test.ts` under `be/ai/**` | Vitest, `fe/desktop/vite.config.ts` with `--root .` |
| Frontend unit | colocated `*.test.ts` under `fe/desktop/src/**`, `*.test.mjs` under `fe/desktop/electron/` | Vitest, same config |
| Electron node tests | `fe/desktop/electron/*.node-test.mjs` | `pnpm test:electron` (`node --test`) |
| Repo tooling | `devops/scripts/agent-app/**/*.test.{ts,mjs}` | Vitest, same config |
| API system tests | `*.e2e.test.ts` (mostly `be/ai/server/`), `be/ai/companion/test/e2e/` | Vitest; `OMB_VITEST_E2E` picks the set per shard |
| UI system tests | `devops/scripts/agent-app/testing/*ui*.e2e.test.ts` | Vitest |
| Shell harnesses | `be/ai/connector/e2e/run.sh`, `devops/deploy/e2e/` | run directly |
| Composio broker | `be/ai/cloudflare/composio-broker/` | `pnpm broker:test` |
| Packaged server smoke | `devops/scripts/agent-app/smoke-packaged-server.mjs` | `pnpm test:packaged-server` |

The Vitest include list is in `fe/desktop/vite.config.ts`. Test fakes (fake driver, scripted
engine CLIs) are in `be/ai/server/testing/`.

## Gates

- `pnpm typecheck` (`make typecheck`): `tsc -b fe/desktop` and `tsc -p be/ai/tsconfig.server.json`.
- `pnpm lint` (`make lint`): `oxlint --deny-warnings .`.
- `pnpm test` (`make test`): the Vitest suite, then the broker tests, the Electron node tests and
  the packaged server smoke.

Changes to a server or conversation flow are also verified by hand in an isolated fixture, following
[`devops/docs/agent-app/verification/README.md`](../agent-app/verification/README.md).
