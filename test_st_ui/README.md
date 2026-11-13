# test_st_ui

System tests that drive the UI. Today they live in `devops/scripts/agent-app/testing/` as
`*ui*.e2e.test.ts` (with helpers such as `host-e2e.ts`), plus the companion Electron e2e in
`fe/desktop/electron/companion-e2e.test.mjs`. Manual verification against an isolated fixture follows
`devops/docs/agent-app/verification/README.md`.
