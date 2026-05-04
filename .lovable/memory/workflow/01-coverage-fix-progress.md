# Coverage Fix Progress

---
name: Coverage Fix Progress
description: Tracks blocked packages and coverage restoration after Phase 1 cleanup
type: feature
---

## Current State: 🔄 In Progress

### Phase 1 Cleanup (Suffix Stripping)
- **Status:** ✅ Done (but caused regressions)
- **What happened:** Renamed `cov9Mini` prefixes, stripped `FromNewValidV2/_Alt` suffixes, cleaned coverage comments
- **Side effect:** 900+ function name redeclaration errors across 8+ test packages

### Module Rename (core → core-v8)
- **Status:** ✅ Done
- **What happened:** All imports updated from `github.com/alimtvnetwork/core` to `core-v8`
- **Side effect:** Minor coverage fluctuations; exposed one test failure in `corestrtests`

### Phase 1 Regression Fixes
- **Status:** 🔄 In Progress
- **Packages partially fixed:** converterstests, coredynamictests, corejsontests, corepayloadtests, corestrtests, coreteststests, errcoretests, namevaluetests, reflectmodeltests
- **Still blocked:** ~182 test files total

### Blocked Package Summary
| Package | Blocked Files | Coverage Impact |
|---------|--------------|-----------------|
| corestrtests | 176 | corestr: 9.4% → 8.4% |
| errcoretests | 3 | errcore: 97.5% → 31.3% |
| corepayloadtests | 2 | corepayload: 96.4% → 0% |
| coredynamictests | 1 | coredynamic: 98.7% → 0.8% |

### Latest CI Run Results (from user)
- `corestrtests`: **FAIL** (specific error unknown — output truncated)
- Most other packages: **PASS** with coverage
- `golangci-lint`: **FAIL** (Go version mismatch — fix applied but not yet pushed)

### Overall Coverage
- **Previous (pre-rename):** 81.2%
- **After rename:** ~58.7% (some packages show `[no statements]`)
- **Target:** 100% reachable

## Next Steps
1. Get full `corestrtests` failure output to diagnose the assertion error
2. Push CI workflow fix for golangci-lint
3. Fix errcoretests (3 files — smallest win)
4. Fix corepayloadtests (2 files)
5. Fix coredynamictests (1 file)
6. Investigate and fix corestrtests cascade (176 files)
