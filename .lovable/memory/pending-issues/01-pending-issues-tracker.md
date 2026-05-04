# Pending Issues Tracker

> Single-file tracker per Lovable convention. Update entries in place; remove (or move to "Resolved" section) when fixed.

## Last Updated: 2026-05-04

---

## Convention

- **Location**: `.lovable/memory/pending-issues/01-pending-issues-tracker.md` (single file, do not split)
- **Statuses**: `open` → `inProgress` → `resolved`
- **Closure**: Move resolved items to bottom "Resolved (Recent)" section, then prune after 30 days.

---

## Active Issues

### P-001 — corestrtests cascade: 176 files blocked
- **Status**: open
- **Severity**: High (largest coverage regressor)
- **Symptom**: All 176 split-recovered subfolders fail compile; `coredata/corestr` coverage stuck at 8.4% (was 9.4%, target ≥98%).
- **Root cause**: Phase 1 suffix-stripping (`cov9Mini` → bare names) caused 900+ redeclaration errors. `CloneSlice_Nil_Helpers_test.go` still has 40+ collisions; other shared helper files likely exhibit the same cascade.
- **Attempted**: Renamed `Test_HashmapDataModel` → `…_HelpersModel` in `Helpers_Methods_test.go` (partial fix).
- **Next action**: Run audit to enumerate every redeclared `Test_*` symbol per file, then batch-rename with deterministic suffix.
- **Ref**: `.lovable/memory/workflow/03-corestrtests-cleanup-progress.md`

### P-002 — errcoretests: 3 files blocked
- **Status**: open
- **Severity**: High (quick win — only 3 files, restores `errcore` 31% → 97.5%)
- **Files**: `FormattersTypes`, `LineDiffExpecting`, `RawErrCollection`
- **Root cause**: Function-name collisions from Phase 1 cleanup.
- **Attempted**: Fixed `RawErrorType_String_test.go`, `ShouldBe_StrEqMsg_test.go`.
- **Next action**: Apply same per-file disambiguation pattern used for the two fixed files.

### P-003 — corepayloadtests: 2 files blocked
- **Status**: open
- **Severity**: High (restores `corepayload` 0% → 96.4%)
- **Files**: `TypedPayloadWrapper`, `TypedPayloadWrapper_SetName_TypedWrapperMethods`
- **Root cause**: Missing shared helpers (`testUserCov23`, `makeTypedWrapperCov23`, `makeCollectionCov23`) and lingering name collisions.
- **Attempted**: Restored `Cov23` helpers in `shared_typed_helpers.go`; renamed `makeTypedWrapper` → `…Cov15`.
- **Next action**: Diff against the 2 still-failing files to find unrenamed callers of the old helper names.

### P-004 — coredynamictests: 1 file blocked
- **Status**: open
- **Severity**: Medium (smallest — investigate last to confirm pattern)
- **File**: `Dynamic_UncoveredPaths`
- **Root cause**: Likely API signature drift after generics refactor.
- **Next action**: `go test -v ./tests/integratedtests/coredynamictests/Dynamic_UncoveredPaths 2>&1 | head -60` to capture exact error.

### P-005 — corestrtests assertion failure (CI)
- **Status**: open (needs verbose output)
- **Severity**: Blocking CI green
- **Symptom**: CI reports `FAIL` in `tests/integratedtests/corestrtests` but the assertion message is truncated in the log excerpt the user shared.
- **Next action**: Run `go test -v ./tests/integratedtests/corestrtests/ 2>&1 | grep -A 20 "FAIL\|panic\|Error"` and paste output.

### P-006 — CI workflow not yet pushed
- **Status**: inProgress
- **Severity**: Blocking lint
- **Symptom**: `golangci-lint` fails with "Go 1.24 < target 1.25". Fix is committed in `.github/workflows/ci.yml` (`version: latest`) but not yet pushed.
- **Next action**: Push the branch.

---

## Resolved (Recent)

| ID | Issue | Resolved | Notes |
|----|-------|----------|-------|
| — | Module rename core → core-v8 | 2026-05-04 | 700+ files updated |
| — | Go 1.24 → 1.25 upgrade | 2026-05-04 | `go.mod` + CI |
| — | golangci-lint version mismatch (code) | 2026-05-04 | Pending push (see P-006) |
