# be

Backend code.

- `be/ai/`: the Node agent server and the services that used to sit at the repo root:
  `server/` (harness server and HTTP + SSE API), `shared/` (wire types shared with the app),
  `companion/`, `connector/`, `relay/`, `cloudflare/` (Workers), `enterprise/`, `evals/`,
  `skills/` and `announcements/`. Its TypeScript configs are `be/ai/tsconfig.server.json`,
  `be/ai/tsconfig.server.build.json` and `be/ai/tsconfig.companion.build.json`.
- `be/app/`: the Python FastAPI app described in the target stack. It is not present yet.

Design notes and verification guides for the agent app live in
[`devops/docs/agent-app`](../devops/docs/agent-app/).
