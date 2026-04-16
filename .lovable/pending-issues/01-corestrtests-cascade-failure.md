# corestrtests: 176 Files Blocked (Cascade Failure)

## Description
All 176 test files in `corestrtests` fail to compile during split recovery. Coverage for `coredata/corestr` dropped to 8.4%.

## Root Cause
Phase 1 cleanup stripped `cov9Mini` and similar suffixes from function names, causing 900+ redeclaration errors across the package. Partial fixes were applied but `CloneSlice_Nil_Helpers_test.go` still has 40+ collisions, and likely other shared helper files cause cascade failures.

## Steps to Reproduce
1. Run `.\run.ps1 -tc`
2. Observe all 176 corestrtests subfolders fail during split recovery

## Attempted Solutions
- [x] Renamed helper functions in `Helpers_Methods_test.go` (e.g., `Test_HashmapDataModel` → `Test_HashmapDataModel_HelpersModel`) — partial fix
- [ ] `CloneSlice_Nil_Helpers_test.go` — 40+ collisions still unresolved

## Priority
High

## Blocked By
Need to identify all shared helper/testcase files that export colliding symbols.
