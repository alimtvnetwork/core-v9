# corepayloadtests: 2 Files Blocked

## Description
`TypedPayloadWrapper` and `TypedPayloadWrapper_SetName_TypedWrapperMethods` fail to compile.

## Root Cause
Missing shared helper symbols (`testUserCov23`, `makeTypedWrapperCov23`, `makeCollectionCov23`) and function name collisions from Phase 1 cleanup.

## Steps to Reproduce
1. Run `.\run.ps1 -tc`
2. Observe 2 corepayloadtests subfolders fail during split recovery

## Attempted Solutions
- [x] Restored `Cov23` helpers in `shared_typed_helpers.go`
- [x] Renamed `makeTypedWrapper` → `makeTypedWrapperCov15` in `TypedPayloadWrapper_test.go`
- [ ] Still 2 files blocked — may need further investigation

## Priority
High
