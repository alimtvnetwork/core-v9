---
name: Module rename core to core-v8
description: Tracks the migration from github.com/alimtvnetwork/core to core-v8 across all files
type: workflow
---

# Module Rename: core → core-v8

## Status: ✅ Done

## What Changed
- `go.mod` module path: `github.com/alimtvnetwork/core` → `github.com/alimtvnetwork/core-v8`
- All Go source files: import paths updated (~700+ files)
- All test files: import paths updated
- All spec/doc files: references updated
- All PowerShell scripts: module path references updated
- `README.md`, `spec/` files, `data/coverage/` files: all references updated

## Verification
- All import paths searched and confirmed updated
- Three PowerShell scripts had remaining `/core/` references that were fixed in a follow-up pass:
  - `scripts/CoverageReportTxt.psm1`
  - `scripts/CoverageRunner.psm1`
  - `scripts/check-integrated-regressions.ps1`

## Go Version Upgrade
- Simultaneously upgraded Go version from 1.24 to 1.25 in `go.mod`
- This caused `golangci-lint` CI failure (see CI/CD issues)

## Impact
- No functional changes to code logic
- Coverage percentages may differ due to the rename triggering recompilation
