# errcoretests: 3 Files Blocked

## Description
Three test files fail to compile: `FormattersTypes`, `LineDiffExpecting`, `RawErrCollection`.

## Root Cause
Function name collisions introduced during Phase 1 suffix-stripping cleanup.

## Steps to Reproduce
1. Run `.\run.ps1 -tc`
2. Observe 3 errcoretests subfolders fail during split recovery

## Attempted Solutions
- [x] Fixed `RawErrorType_String_test.go` and `ShouldBe_StrEqMsg_test.go` — resolved some collisions
- [ ] `FormattersTypes`, `LineDiffExpecting`, `RawErrCollection` still blocked

## Priority
High
