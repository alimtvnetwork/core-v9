# golangci-lint Go Version Mismatch

## Description
`golangci-lint` v2.1.6 (built with Go 1.24) fails when linting a Go 1.25 project.

## Error
```
Error: can't load config: the Go language version (go1.24) used to build golangci-lint is lower than the targeted Go version (1.25.0)
```

## Root Cause
The project upgraded `go.mod` to `go 1.25.0`, but the CI workflow was using a pinned or cached `golangci-lint` version built with Go 1.24. The linter refuses to analyze code targeting a newer Go version than it was compiled with.

## Fix Applied
Updated `.github/workflows/ci.yml`:
- Changed `golangci-lint-action` from `version: v6` to `version: latest`
- This ensures the CI pulls a `golangci-lint` binary built with Go 1.25+

## Status
🔄 Fix applied in codebase, pending push to GitHub

## Steps to Verify
1. Push the updated `.github/workflows/ci.yml`
2. Confirm the lint job passes in CI
3. Verify no new lint errors are introduced by Go 1.25
