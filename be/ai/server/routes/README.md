# server/routes

New HTTP routes go here as modules. Do not add route `if` blocks to `be/ai/server/index.ts`.
`devops/scripts/agent-app/testing/index-route-ratchet.test.ts` fails when `index.ts` gains a path guard. Moving a route out needs no
change there: the numbers are lowered at each release.

- A route module exports a factory with explicit dependencies, `createXRoutes(deps): RouteHandler`
  (same shape as `be/ai/server/workspace-backup-http.ts`). It never imports `be/ai/server/index.ts`.
- `index.ts` builds it next to its other wiring (one import, one `ROUTES.push(createXRoutes({...}))`);
  a module that needs no dependencies is listed in `ROUTES` in `table.ts` directly.
- A handler returns `PASS` when the request is not its own; returning anything else means it answered.
  Inside one module, keep a literal path ahead of a pattern that would also match it.
- `handleRequest` runs the table right after the auth gate, so handlers are already authenticated.
  Scope rules stay keyed by path in `be/ai/server/request-auth.ts`.
- `RouteContext` carries `req`, `res`, `url`, `path`, `method`, `auth`, `json`, `readBody`; the rest is `deps`.
- Type-only imports must be `import type` (or an inline `type`): the server runs on type stripping, so
  a bare type import passes `tsc` and crashes at boot.
