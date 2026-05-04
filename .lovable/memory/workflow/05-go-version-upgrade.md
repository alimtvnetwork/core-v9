---
name: Go version upgrade to 1.25
description: Tracks the Go 1.24 to 1.25 upgrade and its side effects
type: workflow
---

# Go Version Upgrade: 1.24 → 1.25

## Status: ✅ Done (code changes) / 🔄 CI fix pending push

## Changes Made
- `go.mod`: `go 1.24` → `go 1.25.0`
- `.github/workflows/ci.yml`: `go-version: "1.24"` → `go-version: "1.25"`
- `golangci-lint-action`: `version: v6` → `version: latest` (to get Go 1.25-compatible binary)

## Side Effect
- `golangci-lint` v2.1.6 (built with Go 1.24) cannot lint Go 1.25 targets
- Error: `can't load config: the Go language version (go1.24) used to build golangci-lint is lower than the targeted Go version (1.25.0)`
- Fix: Use `version: latest` in the golangci-lint GitHub Action to pull a Go 1.25-compatible build

## Verification Needed
- Push the updated `ci.yml` and confirm lint job passes
