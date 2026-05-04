# Plan — core-v8 Roadmap

> Single source of truth for handoff to another AI. Edit in place; do not split.

**Last Updated**: 2026-05-04
**Module**: `github.com/alimtvnetwork/core-v8` (Go 1.25)
**Current coverage**: ~58.7% (regressed from 81.2% — see pending issues P-001..P-004)

Companion files:
- `.lovable/memory/reports/01-reliability-risk-report.md` — go/no-go assessment
- `.lovable/memory/suggestions/01-suggestions-tracker.md` — open suggestions
- `.lovable/memory/pending-issues/01-pending-issues-tracker.md` — active issues
- `.lovable/memory/index.md` — core rules (always in context)

---

## Phase Status

| Phase | Status |
|---|---|
| Phases 1–8 (Foundation → Deep Quality Sweep) | ✅ Done |
| Error / Go / Test-title modernization | ✅ Done |
| Phases A–E (Coverage stabilization → Unit coverage fix) | ✅ Done |
| Module rename core → core-v8 | ✅ Done (2026-05-04) |
| Go 1.24 → 1.25 upgrade | ✅ Done (2026-05-04) |
| CI golangci-lint version-mismatch fix (code) | ✅ Applied — pending push (P-006) |
| **Phase F — Restore blocked test packages** | 🔄 In Progress |
| Phase G — Coverage push to 100% | ⏳ Blocked by Phase F |
| Phase H — Deprecated API cleanup (S-009) | ⏳ Blocked by consumer audit |

---

## Active Backlog (Prioritized)

### Priority 1 — Unblock CI & coverage

#### T-1. Push CI workflow fix
- **Objective**: Get `golangci-lint` green in CI.
- **Dependencies**: None.
- **Outputs**: `git push` of branch containing `.github/workflows/ci.yml` change (`version: latest`).
- **Acceptance**: CI lint job passes.

#### T-2. Fix `errcoretests` (3 blocked files)
- **Objective**: Restore `errcore` coverage 31% → 97.5%.
- **Files**: `FormattersTypes`, `LineDiffExpecting`, `RawErrCollection`.
- **Dependencies**: None.
- **Outputs**: Disambiguated test symbols; passing `./run.ps1 PC` for `errcoretests`.
- **Acceptance**: Package compiles; `./run.ps1 TC` shows `errcore` ≥ 97%.

#### T-3. Fix `corepayloadtests` (2 blocked files)
- **Objective**: Restore `corepayload` 0% → 96%.
- **Files**: `TypedPayloadWrapper`, `TypedPayloadWrapper_SetName_TypedWrapperMethods`.
- **Dependencies**: T-2 pattern (same disambiguation playbook).
- **Acceptance**: Both files compile; `corepayload` ≥ 96%.

#### T-4. Fix `coredynamictests/Dynamic_UncoveredPaths` (1 file)
- **Objective**: Restore `coredynamic` 0.8% → 98%.
- **Dependencies**: Capture `go test -v` output first.
- **Acceptance**: File compiles; coverage restored.

#### T-5. Diagnose & fix `corestrtests` cascade (P-001, 176 files)
- **Objective**: Restore `corestr` 8.4% → 98%+.
- **Approach**: (a) generate full audit of redeclared `Test_*` symbols per file, (b) deterministic suffix rename in batches, (c) compile-gate each batch.
- **Dependencies**: T-2/T-3/T-4 (validate playbook on smaller cases first).
- **Acceptance**: All 176 subfolders compile; `corestr` ≥ 98%.

### Priority 2 — Quality additions (parallelizable with P1)

#### T-6. S-010 Performance benchmarks
- **Objective**: Establish baseline for hot paths.
- **Targets**: `corestr/Collection`, `coredynamic`, `errcore`, `codestack`, `regexnew`, `mutexbykey`.
- **Acceptance**: ≥30 `Benchmark*` tests across ≥6 packages with `b.ReportAllocs()`.

#### T-7. S-015 Version-bump discipline (process)
- **Objective**: Enforce minor-version bump on every code change outside `.release/`.
- **Acceptance**: Every code-changing PR/session bumps version; `.release/` untouched.

### Priority 3 — Larger reshapes (need design / audit gate first)

#### T-8. S-012 Pointer receiver audit (with caching-field allowlist)
- **Pre-req**: Add allowlist of types that must keep pointer receivers.
- **Acceptance**: Migrated methods identified, no behavior regression.

#### T-9. S-013 Mutex → RWMutex audit
- **Pre-req**: T-6 benchmarks landed (need data to justify).

#### T-10. S-009 Deprecated API removal (110 functions)
- **Pre-req**: External consumer audit across `auk-go` repos by user.
- **Acceptance**: Zero `// Deprecated:` markers (except documented external).

#### T-11. Stale-spec sweep
- **Objective**: Mark resolved entries in `spec/05-failing-tests/` and `spec/13-app-issues/` as ✅ Done or move to `spec/_archive/`.
- **Acceptance**: No re-attempts of completed work in future sessions.

---

## Next Task Selection

Pick one for the next implementation session. Ordered by ROI/risk:

1. **T-1** — Push CI workflow fix *(2 min, unblocks lint)*
2. **T-2** — Fix `errcoretests` 3 files *(quick win, +66 pp on `errcore`)*
3. **T-3** — Fix `corepayloadtests` 2 files *(+96 pp on `corepayload`)*
4. **T-4** — Fix `coredynamictests` 1 file *(needs verbose output first)*
5. **T-6** — Start S-010 benchmarks *(parallel-safe, no Go-compile dependency from AI side)*
6. **T-5** — Tackle `corestrtests` cascade *(largest, do last)*

> Tell me the T-number you want and I'll start.
