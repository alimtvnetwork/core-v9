---
name: index
description: Master index of all project memory files
type: reference
---

# Project Memory

## Core
Increment minor version on all code changes outside `.release`. `.release` is read-only.
Cross-compile for Windows, Linux, Darwin (amd64, arm64).
`cmd/main/main.go` is an empty placeholder; DO NOT modify it.
Never remove or modify exported API methods to preserve backward compatibility.
100% reachable coverage required. Tests go in `/tests/integratedtests/` and use `args.Map` + `ShouldBeEqual`.
In-package `*_test.go` cannot import heavy frameworks (`coretests/`, `goconvey`, `testify`).
No boolean flag parameters. Suffix sequence: Base+Filter+Type+Lock+If+Must.
Pointer receivers are mandatory for methods requiring nil-safety.
PowerShell modules target ≤150 lines. CRLF required. PS scripts cannot overwrite Go source.
Directory creation (e.g., `os.MkdirAll`) must use `0755` (dirDefaultChmod).
Module path: `github.com/alimtvnetwork/core-v8` (renamed from `core`). Go 1.25.
CI uses `golangci-lint` with `version: latest` to match Go version.
Pending issues tracked in single file: `.lovable/memory/pending-issues/01-pending-issues-tracker.md`.
Suggestions tracked in single file: `.lovable/memory/suggestions/01-suggestions-tracker.md`.
Roadmap & next-task selection in root `plan.md`.

## Memories
- [Reliability Risk Report](mem://reports/01-reliability-risk-report) — 2026-05-04 executive — success probabilities by tier, top 5 risks, readiness decision
- [macOS Runner RCA](mem://reports/02-macos-runner-root-cause-analysis) — Root cause for OSC 11 terminal leak and hidden compile-vs-runtime diagnosis
- [Suggestions Tracker](mem://suggestions/01-suggestions-tracker) — Active suggestions S-009..S-015 (single tracker file)
- [Pending Issues Tracker](mem://pending-issues/01-pending-issues-tracker) — Active P-001..P-006 (blocked test packages, CI push)
- [Coverage Fix Progress](mem://workflow/01-coverage-fix-progress) — Blocked test packages restoration status
- [macOS Runner Fix](mem://workflow/02-macos-runner-fix) — Applied script fixes for macOS terminal probing and error classification
- [corestrtests Cleanup Progress](mem://workflow/03-corestrtests-cleanup-progress) — 7-phase corestrtests naming/structure/assertion cleanup; Phase 1 (38 _Cov2 symbols) done
- [File Naming Cleanup](mem://workflow/03-file-naming-cleanup) — 6-phase plan: Coverage/C##/Src_ file renames + CovN symbol fixes
- [Module Rename](mem://workflow/04-module-rename-core-to-core-v8) — Migration from core to core-v8, all imports updated
- [Go Version Upgrade](mem://workflow/05-go-version-upgrade) — Go 1.24 → 1.25 upgrade and golangci-lint side effect
- [AI Agent Reference](mem://testing/specs/ai-agent-reference) — Go testing and coverage workflows
- [LLM Integration Guide](mem://project/llm-integration-guide) — Master reference for AI agents
- [Dashboard UI](mem://tooling/powershell/dashboard-ui) — PowerShell dashboard, Unicode checkmarks
- [Modular Architecture](mem://tooling/powershell/modular-architecture) — PS run.ps1 dispatcher
- [Go Validation](mem://tooling/powershell/go-validation) — safeTest closure single line
- [UI Alignment Constraints](mem://tooling/powershell/ui-alignment-constraints) — AnsiVisualLength and fallback width
- [Coverage Split Recovery](mem://tooling/powershell/coverage-split-recovery) — PowerShell split recovery
- [Compatibility Constraints](mem://tooling/powershell/compatibility-constraints) — CRLF strings and empty-string PS5.1 limits
- [Scoping Conventions](mem://tooling/powershell/scoping-conventions) — PS $global scope variables
- [Error Attribution](mem://tooling/powershell/error-attribution) — Module and function error logging
- [Error Extraction Pipeline](mem://tooling/powershell/error-extraction-pipeline) — 4-Tier pipeline for build errors
- [Test Utilities](mem://tooling/scripts/test-overhaul-utilities) — Python fix scripts
- [Suffix Ordering](mem://go/coding-standards/suffix-ordering)
- [Method Authoring Patterns](mem://go/coding-standards/method-authoring-patterns)
- [Fallback Naming](mem://go/coding-standards/fallback-naming)
- [Variadic vs Slice](mem://go/coding-standards/variadic-vs-slice)
- [Fallback Hierarchy](mem://go/coding-standards/fallback-hierarchy)
- [Generics Formatting](mem://go/coding-standards/generics-formatting)
- [Nil Map Initialization](mem://go/coding-standards/nil-map-initialization)
- [Pointer Receiver Policy](mem://go/coding-standards/pointer-receiver-policy)
- [API Stability](mem://go/coding-standards/api-stability-policy)
- [Generics Helpers](mem://go/generics-functional-helpers)
- [Generic Containers](mem://go/coregeneric-containers)
- [Reflect Model Equality](mem://go/reflect-model/equality-logic)
- [JSON Equality Logic](mem://go/coredata/json-equality-logic)
- [Collection Cloning](mem://go/collection-cloning-pattern)
- [CoreCmp Logic](mem://go/corecmp-logic)
- [Pagination Behavior](mem://go/codestack/pagination-behavior)
- [Path Error Behavior](mem://go/chmodhelper/path-error-behavior)
- [Payload Testing](mem://go/coredata/corepayload/testing)
- [Chmod Testing](mem://go/chmodhelper/testing)
- [CoreStr Testing](mem://go/coredata/corestr/testing)
- [Dynamic API](mem://go/coredata/coredynamic/api)
- [Payload API](mem://go/coredata/corepayload/api)
- [JSON API](mem://go/coredata/corejson/api)
- [Range API](mem://go/coredata/corerange/api)
- [String API](mem://go/coredata/corestr/api)
- [Chmod API](mem://go/chmodhelper/api)
- [Validator Testing](mem://go/corevalidator/testing)
- [Validator Implementation](mem://go/corevalidator/implementation)
- [Args Implementation](mem://go/coretests/args/implementation)
- [Enum Patterns](mem://go/enum-authoring/patterns)
- [Enum Tech Details](mem://go/enum-authoring/technical-details)
- [Enum Conversion](mem://go/enum-authoring/conversion-logic)
- [Enum Factories](mem://go/enum-authoring/lookup-methods-and-factories)
- [String Behavior Notes](mem://go/coreutils/stringutil/behavior-notes)
- [Reachable Paths](mem://testing/coverage/reachable-paths)
- [Unexported Symbols](mem://testing/coverage/unexported-symbols)
- [Case Types](mem://testing/framework/case-types)
- [Symbol Naming](mem://testing/framework/symbol-naming)
- [Failure Isolation](mem://testing/framework/failure-isolation)
- [Location Policy](mem://testing/framework/location-policy)
- [Syntax Constraints](mem://testing/framework/syntax-constraints)
- [AAA Policy](mem://testing/framework/aaa-standard-policy)
- [Naming/Assertions](mem://testing/naming-and-assertions-standard)
- [Path Validation](mem://testing/framework/path-validation)
- [Overhaul Patterns](mem://testing/framework/test-overhaul-patterns)
- [Permission Expectations](mem://testing/chmodhelper/permission-expectations)
- [Args Assertion Types](mem://testing/args-assertion-types)
- [In-Package Imports](mem://testing/in-package-import-restrictions)
- [OS Constraints](mem://testing/os-constraints)
- [GitHub Pipeline](mem://ci-cd/github-actions-pipeline)
- [Release Automation](mem://ci-cd/release-automation)
- [Bot Triggers](mem://ci-cd/bot-trigger-restriction)
