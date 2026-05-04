# Suggestions

## Active Suggestions

### Fix errcoretests first (smallest win)
- **Status:** Pending
- **Priority:** High
- **Description:** Only 3 blocked files — quick fix to restore `errcore` from 31.3% back to ~97.5%.
- **Added:** Session 1 (post-remix)

### Diagnose corestrtests root cause
- **Status:** Pending
- **Priority:** High
- **Description:** 176 files all failing suggests a shared dependency or shared helper file causing the cascade. Additionally, 1 assertion failure now surfacing after module rename. Investigate `Helpers_Methods_test.go` and any shared testcase files.
- **Added:** Session 1 (post-remix)
- **Updated:** Current session — CI now shows assertion FAIL (not just compile block)

### Fix corepayloadtests (2 files)
- **Status:** Pending
- **Priority:** High
- **Description:** Restore `corepayload` coverage from 0% back to ~96.4%.
- **Added:** Session 1 (post-remix)

### Fix coredynamictests (1 file)
- **Status:** Pending
- **Priority:** Medium
- **Description:** Single file `Dynamic_UncoveredPaths` blocking. Restore `coredynamic` from 0.8% to ~98.7%.
- **Added:** Session 1 (post-remix)

### Investigate redeclared symbols (916 found)
- **Status:** Pending
- **Priority:** High
- **Description:** Audit found 916 redeclared symbols causing 191 build failures. ~860 are phantom (injected by split recovery runner), ~25 are real source duplicates. Fix plan has 6 steps.
- **Added:** Current session
- **Details:** See `data/coverage/redeclared-symbols-fix-plan.md`

## Implemented Suggestions

### ✅ Module rename core → core-v8
- **Implemented:** Current session
- **Notes:** All 700+ files updated. Verified with grep. Three PS scripts had remaining refs, fixed in follow-up.

### ✅ CI golangci-lint version fix
- **Implemented:** Current session
- **Notes:** `version: latest` in `.github/workflows/ci.yml`. Pending push.
