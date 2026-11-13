# test_unit_fe

Frontend unit tests. Today they are colocated as `*.test.ts` under `fe/desktop/src/**`, with
`*.test.mjs` under `fe/desktop/electron/` and Electron `node --test` files
(`fe/desktop/electron/*.node-test.mjs`, `pnpm test:electron`). `pnpm test` runs the Vitest ones
with `fe/desktop/vite.config.ts` from the repo root; `make test-unit-fe` runs only `fe/desktop/src`.
