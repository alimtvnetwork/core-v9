# coresort — Sorting Utilities

## Overview

The `coresort` package provides in-place sorting functions for `int` and `string` slices, including pointer-slice and descending-order variants. All functions mutate the input and return it for chaining.

## Architecture

```
coresort/
├── intsort/
│   └── Quick.go       # int sorting (asc, desc, pointer, pointer-desc)
└── strsort/
    └── Quick.go       # string sorting (asc, desc, pointer, pointer-desc)
```

## Sub-packages

### `intsort` — Integer Sorting

| Function | Signature | Description |
|----------|-----------|-------------|
| `Quick(in)` | `(*[]int) → *[]int` | In-place ascending sort |
| `QuickDsc(in)` | `(*[]int) → *[]int` | In-place descending sort |
| `QuickPtr(in)` | `(*[]*int) → *[]*int` | In-place ascending sort for pointer slices |
| `QuickDscPtr(in)` | `(*[]*int) → *[]*int` | In-place descending sort for pointer slices |

### `strsort` — String Sorting

| Function | Signature | Description |
|----------|-----------|-------------|
| `Quick(in)` | `(*[]string) → *[]string` | In-place ascending sort |
| `QuickDsc(in)` | `(*[]string) → *[]string` | In-place descending sort |
| `QuickPtr(in)` | `(*[]*string) → *[]*string` | In-place ascending sort for pointer slices |
| `QuickDscPtr(in)` | `(*[]*string) → *[]*string` | In-place descending sort for pointer slices |

## Usage Examples

```go
import (
    "github.com/alimtvnetwork/core-v9/coresort/intsort"
    "github.com/alimtvnetwork/core-v9/coresort/strsort"
)

// Sort integers ascending
nums := []int{3, 1, 2}
intsort.Quick(&nums) // nums = [1, 2, 3]

// Sort strings descending
names := []string{"charlie", "alice", "bob"}
strsort.QuickDsc(&names) // names = ["charlie", "bob", "alice"]

// Sort pointer slices
a, b, c := 3, 1, 2
ptrs := []*int{&a, &b, &c}
intsort.QuickPtr(&ptrs) // sorted by dereferenced values
```

## Key Patterns

- **Mutation warning**: All functions mutate the input slice in-place.
- **Return for chaining**: Functions return the input pointer for fluent usage.
- Pointer-slice variants use `coredata.PointerStrings` / `coredata.PointerIntegers` adapters implementing `sort.Interface`.
- Descending variants use `coredata.*Dsc` adapters with reversed `Less()`.

## Related Docs

- [coregeneric ordered functions](../coredata/coregeneric/README.md) — generic `SortCollection`, `SortSimpleSlice` alternatives
- [Repo Overview](../spec/01-app/00-repo-overview.md)
