# Strictly Avoided Patterns

- **Writing tests with assumed API signatures:** Always grep/read source before writing test code. See: `issues/coverage-test-api-mismatch-cascade.md`
- **Bulk-submitting test files without compile verification:** Every test file must compile individually before committing. See: `issues/coverage-test-api-mismatch-cascade.md`
- **Stripping function suffixes without checking for collisions:** Renaming `Test_Cov9Mini_X` → `Test_X` causes redeclaration errors when multiple files share the same package. Always search for existing symbols first.
- **Modifying `cmd/main/main.go`:** It is an empty placeholder — do not touch.
- **Modifying `.release` folder:** Read-only, never change.
- **Using heavy test frameworks in in-package `*_test.go`:** No `coretests/`, `goconvey`, or `testify` imports in in-package tests.
- **Storing roles on profile/users table:** Privilege escalation risk — use separate `user_roles` table.
- **Nil-checking value types:** Go value types (structs returned by value) can't be compared to nil.
- **Using `%s` with generic types:** Use `%v` instead.
