---
name: 01-reliability-risk-report
description: Concise executive risk report — success probability of handing core-v8 specs to another AI
type: reference
---

# Reliability & Failure-Chance Report (Executive)

**Date**: 2026-05-04
**Scope**: Full spec set under `/spec/` for `github.com/alimtvnetwork/core-v8`
**Verdict**: 🟡 **Conditionally ready.** Safe for narrow, well-bounded tasks. **Not safe** for unsupervised bulk coverage work or deprecated-API removal.

---

## 1. Success Probability by Complexity Tier

| Tier | Example tasks | Success | Why |
|---|---|:---:|---|
| **Simple** — single-file, mechanical | README edits, constant renames, deprecation comments, version bumps | **95%** | Specs are clear, low blast radius. |
| **Medium** — multi-file, API-aware | Pointer-receiver audit (S-012), benchmark scaffolding (S-010), mutex→RWMutex (S-013), 3 blocked test files in `errcoretests` | **70–80%** | Requires reading source for exact signatures; risk of cross-file inconsistency. |
| **Complex / Agentic** — coverage push on reflection-heavy pkgs | `corestr` (3.3% → 100%), `coredynamic` (0.9% → 100%), `corejson`, `corepayload` | **40–50%** | Documented root cause: AI hallucinates Go API signatures (`workflow/03-api-hallucination-root-cause.md`). One wrong signature cascades. |
| **End-to-End** — write→compile→fix→verify loop | Full coverage push behind `./run.ps1 PC`/`TC` | **35–45%** | AI cannot run Go in sandbox; every cycle needs user verification, amplifying latency × error rate. |

**Global assumptions**:
1. AI cannot compile/run Go locally — all Go work is write-only until user runs PowerShell.
2. AI must read source before every test edit (do not infer naming patterns).
3. `.release/` is read-only, always.
4. Every code change bumps minor version outside `.release/`.

---

## 2. Top 5 Failure Risks

| # | Risk | Likelihood | Impact | Symptom |
|---|------|:---:|:---:|---|
| 1 | API hallucination in `corestr`/`coredynamic` coverage work | Very High | Blocks dozens of test files | Compile cascade, coverage drops project-wide |
| 2 | corestrtests cascade unfixed (P-001, 176 files) | Active | Blocks `corestr` to 8.4% | All split-recovered subfolders fail |
| 3 | Bulk deprecated-API removal (S-009, 110 fns) without consumer audit | Medium | Breaks downstream `auk-go` repos | Surprise compile errors in consumers |
| 4 | Pointer→value receiver migration on types with caching fields (S-012) | Medium | Silent runtime regression | Tests pass, behavior breaks |
| 5 | Stale spec cross-references (24+ failing-test docs over 3 rounds) | Medium | AI re-attempts completed work | Wasted cycles, conflicting edits |

---

## 3. Top 5 Corrective Actions (Ordered)

1. **Fix the 4 blocked test packages first** (P-002 → P-003 → P-004 → P-001). Restores ~22 percentage points of coverage and unblocks all downstream work. *Reliability gain: high — converts "complex agentic" work back to "medium".*
2. **Add a "read-source-before-write" gate** to every coverage prompt (`spec/03-powershell-test-run/06-coverage-prompt-generator.md` already supports this — enforce it). *Mitigates risk #1.*
3. **Run consumer audit** for S-009 deprecated APIs across `auk-go` repos before any removal batch. *Mitigates risk #3.*
4. **Mark caching-field types ineligible** for S-012 receiver migration in the spec; add explicit allowlist. *Mitigates risk #4.*
5. **Sweep `spec/05-failing-tests/` and `spec/13-app-issues/`** to mark resolved entries as ✅ Done (or move to archive). *Mitigates risk #5.*

---

## 4. Readiness Decision

| Work category | Ready for another AI? |
|---|:---:|
| Simple + Medium tasks listed in `plan.md` "Next task selection" | ✅ Yes |
| Coverage push on `corestr`/`coredynamic` | ❌ No — fix blocked packages and add source-read gate first |
| Deprecated API removal (S-009) | ❌ No — needs consumer audit |
| Pointer receiver migration (S-012) | ⚠️ Only with allowlist |

**Bottom line**: Hand over P-002 / P-003 / P-004 / S-010 / S-015 confidently. Defer everything else until the corrective actions above land.
