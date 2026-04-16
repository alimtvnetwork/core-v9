# coredynamictests: 1 File Blocked

## Description
`Dynamic_UncoveredPaths` fails to compile.

## Root Cause
Likely API signature mismatch or symbol collision from Phase 1 cleanup.

## Steps to Reproduce
1. Run `.\run.ps1 -tc`
2. Observe `coredynamictests/Dynamic_UncoveredPaths` fails during split recovery

## Attempted Solutions
- [ ] Not yet investigated in detail

## Priority
Medium
