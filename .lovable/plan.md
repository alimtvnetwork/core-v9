# Project Plan

## Active Tasks

### 1. Fix blocked test packages
- **Status:** 🔄 In Progress
- **Priority:** High
- **Description:** 182 test packages are blocked from compiling. Fix compilation errors to restore coverage.
- **Subtasks:**
  - ⏳ Fix `corestrtests` — 176 files blocked (root cause: shared symbol collisions from Phase 1 cleanup)
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

## Completed
(none yet — this is a fresh session after remix)
