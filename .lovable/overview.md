# Project Overview

## Name
`github.com/alimtvnetwork/core-v8` — Go shared utility framework (auk-go ecosystem)

## Purpose
Reusable primitives, data structures, interfaces, converters, validators, file-system helpers, testing utilities, and code-generation tools for downstream Go packages.

## Tech Stack
- **Language:** Go 1.25
- **Module path:** `github.com/alimtvnetwork/core-v8` (migrated from `core`)
- **Testing:** Custom `coretests` framework with `CaseV1`, `CaseNilSafe`, `GenericGherkins`
- **CI/CD:** GitHub Actions + GoReleaser
- **Tooling:** PowerShell `run.ps1` dispatcher for testing, coverage, and deployment
- **Cross-compile:** Windows, Linux, Darwin (amd64, arm64)

## Current State (as of latest session)
- **Module renamed:** `core` → `core-v8` in all imports, go.mod, specs, scripts
- **Go version:** Upgraded from 1.24 to 1.25
- **CI lint issue:** `golangci-lint` v2.1.6 built with Go 1.24 cannot lint Go 1.25 code — fixed by setting `version: latest` in CI workflow
- **corestrtests FAIL:** One test failure in `corestrtests` package — specific assertion error not yet identified (output truncated)
- **Coverage:** Most packages compiling and passing; `corestrtests` is the remaining blocker
- **182 blocked test packages** (compilation errors preventing coverage) — reduced from Phase 1 cleanup regressions
- **Coverage target:** 100% reachable

## Key Conventions
- Tests in `/tests/integratedtests/<package>tests/`
- AAA pattern (Arrange, Act, Assert)
- `args.Map` + `ShouldBeEqual` assertion style
- No boolean flag parameters
- Pointer receivers for nil-safety
- Never modify exported APIs
- `.release` folder is read-only
