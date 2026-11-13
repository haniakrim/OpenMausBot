# The checkout path may contain spaces, so every recipe runs from a quoted $(CURDIR).
ROOT := "$(CURDIR)"
VITEST := pnpm exec vitest run --config fe/desktop/vite.config.ts --root .
IMAGE ?= clinicle-intelligence

.DEFAULT_GOAL := help
.PHONY: help install dev dev-server dev-desktop build typecheck lint test test-unit-be test-unit-fe docs-dev docker-build clean

help:
	@echo "make install        pnpm install"
	@echo "make dev            app dev server (pnpm dev)"
	@echo "make dev-server     harness server (pnpm dev:server)"
	@echo "make dev-desktop    Electron shell (pnpm dev:desktop)"
	@echo "make build          production build (pnpm build)"
	@echo "make typecheck      pnpm typecheck"
	@echo "make lint           pnpm lint"
	@echo "make test           full suite (pnpm test)"
	@echo "make test-unit-be   vitest on be/ai, without e2e files"
	@echo "make test-unit-fe   vitest on fe/desktop/src, without e2e files"
	@echo "make docs-dev       docs site dev server (pnpm docs:dev)"
	@echo "make docker-build   docker build -f devops/deploy/Dockerfile -t $(IMAGE) ."
	@echo "make clean          pnpm clean"

install:
	cd $(ROOT) && pnpm install

dev:
	cd $(ROOT) && pnpm dev

dev-server:
	cd $(ROOT) && pnpm dev:server

dev-desktop:
	cd $(ROOT) && pnpm dev:desktop

build:
	cd $(ROOT) && pnpm build

typecheck:
	cd $(ROOT) && pnpm typecheck

lint:
	cd $(ROOT) && pnpm lint

test:
	cd $(ROOT) && pnpm test

test-unit-be:
	cd $(ROOT) && $(VITEST) --exclude "**/*.e2e.test.*" be/ai

test-unit-fe:
	cd $(ROOT) && $(VITEST) --exclude "**/*.e2e.test.*" fe/desktop/src

docs-dev:
	cd $(ROOT) && pnpm docs:dev

docker-build:
	cd $(ROOT) && docker build -f devops/deploy/Dockerfile -t $(IMAGE) .

clean:
	cd $(ROOT) && pnpm clean
