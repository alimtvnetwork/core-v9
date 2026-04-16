---
name: Coverage Fix Progress
description: Tracks blocked packages and coverage restoration after Phase 1 cleanup
type: feature
---

# Coverage Fix Progress

## Current State: 🔄 In Progress

### Phase 1 Cleanup (Suffix Stripping)
- **Status:** ✅ Done (but caused regressions)
- **What happened:** Renamed `cov9Mini` prefixes, stripped `FromNewValidV2/_Alt` suffixes, cleaned coverage comments
- **Side effect:** 900+ function name redeclaration errors across 8+ test packages

### Phase 1 Regression Fixes
- **Status:** 🔄 In Progress
- **Packages partially fixed:** converterstests, coredynamictests, corejsontests, corepayloadtests, corestrtests, coreteststests, errcoretests, namevaluetests, reflectmodeltests
- **Still blocked:** 182 test files total

### Blocked Package Summary
| Package | Blocked Files | Coverage Impact |
|---------|--------------|-----------------|
| corestrtests | 176 | corestr: 9.4% → 8.4% |
| errcoretests | 3 | errcore: 97.5% → 31.3% |
| corepayloadtests | 2 | corepayload: 96.4% → 0% |
| coredynamictests | 1 | coredynamic: 98.7% → 0.8% |

### Overall Coverage
- **Previous:** 81.2%
- **Current:** 58.7%
- **Target:** 100% reachable

## Next Steps
1. Fix errcoretests (3 files — smallest win)
2. Fix corepayloadtests (2 files)
3. Fix coredynamictests (1 file)
4. Investigate and fix corestrtests cascade (176 files)
