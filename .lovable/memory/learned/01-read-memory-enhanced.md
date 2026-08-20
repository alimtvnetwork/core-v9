# Read Memory Summary (read-memory-enhanced)

## Read Files
- `.lovable/overview.md`
- `.lovable/strictly-avoid.md`
- `.lovable/memory/index.md`
- `.lovable/plan.md`
- `.lovable/prompt.md`
- `.lovable/prompts/01-write-memory-prompt.md`
- `.lovable/suggestions.md`
- `.lovable/cicd-issues/cicd-index.md`
- `.lovable/cicd-issues/01-golangci-lint-version-mismatch.md`
- `.lovable/cicd-issues/02-corestrtests-ci-failure.md`
- `spec/01-app/17-coding-guidelines.md`
- `spec/01-app/16-testing-guidelines.md`

## Notes
- Folders `spec/12-consolidated-guidelines/` and `spec/01-spec-authoring-guide/` were missing, so I fell back to reading `spec/01-app/17-coding-guidelines.md` and `spec/01-app/16-testing-guidelines.md`.
- Folders `.lovable/plans/`, `.lovable/ambiguous-questions/`, and `.lovable/issues/` were not found. I read `.lovable/plan.md`, `.lovable/solved-issues/`, and `.lovable/memory/pending-issues/` instead.
- CODE RED rules (strictly-avoid) cover: Writing tests with assumed API signatures, Bulk-submitting test files without compile verification, Modifying `cmd/main/main.go` and `.release`, using heavy test frameworks in in-package tests, Nil-checking value types, etc.
- Testing uses `args.Map` + `ShouldBeEqual` pattern.
- Naming uses `newCreator` factory pattern and `Method + Filter + Type + Lock + If + Must` suffix ordering.
