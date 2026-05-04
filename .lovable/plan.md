# Project Plan

## Active Tasks

### 1. Fix blocked test packages
- **Status:** 🔄 In Progress
- **Priority:** High
- **Description:** 182 test packages are blocked from compiling. Fix compilation errors to restore coverage.
- **Subtasks:**
  - ⏳ Fix `corestrtests` — 176 files blocked (root cause: shared symbol collisions from Phase 1 cleanup) + 1 assertion failure
  - ⏳ Fix `errcoretests` — 3 files blocked (`FormattersTypes`, `LineDiffExpecting`, `RawErrCollection`)
  - ⏳ Fix `corepayloadtests` — 2 files blocked (`TypedPayloadWrapper`, `TypedPayloadWrapper_SetName_TypedWrapperMethods`)
  - ⏳ Fix `coredynamictests` — 1 file blocked (`Dynamic_UncoveredPaths`)

### 2. Restore coverage to previous levels
- **Status:** ⏳ Pending (depends on #1)
- **Priority:** High
- **Description:** Coverage dropped from 81.2% → 58.7% due to blocked packages. Key regressions:
  - `converters`: 100% → 5.9%
  - `coredata/coredynamic`: 98.7% → 0.8%
  - `coredata/corejson`: 97.7% → 5%
  - `coredata/corepayload`: 96.4% → 0%
  - `errcore`: 97.5% → 31.3%
  - `coretests`: 97.3% → 85.3%
  - `coredata/corestr`: 9.4% → 8.4%

### 3. Push all packages to 100% reachable coverage
- **Status:** ⏳ Pending (depends on #2)
- **Priority:** Medium
- **Description:** Per spec `27-unit-coverage-fix.md`, work on 2 packages at a time toward 100%.

### 4. Diagnose and fix corestrtests assertion failure
- **Status:** ⏳ Pending (needs verbose test output)
- **Priority:** High
- **Description:** `corestrtests` reports FAIL in CI but the specific assertion error is truncated. Need `go test -v` output to diagnose.

### 5. Push CI workflow changes
- **Status:** ⏳ Pending push
- **Priority:** High
- **Description:** `golangci-lint` version fix is applied in codebase but needs to be pushed to GitHub.

## Completed

### ✅ Module rename: core → core-v8
- **Completed:** Current session
- **Description:** Updated `go.mod` module path and all 700+ import references from `github.com/alimtvnetwork/core` to `core-v8`.
- **Files changed:** 700+ Go source, test, spec, script, and data files.

### ✅ Go version upgrade: 1.24 → 1.25
- **Completed:** Current session
- **Description:** Updated `go.mod` and CI workflow to target Go 1.25.

### ✅ CI golangci-lint fix
- **Completed:** Current session (code change applied)
- **Description:** Changed `golangci-lint-action` to `version: latest` to resolve Go version mismatch. Pending push.

### ✅ PowerShell script import path fix
- **Completed:** Current session
- **Description:** Fixed remaining `/core/` references in 3 PowerShell scripts that were missed in initial rename pass.
