# coreindexes

Named index constants and slice-index utility functions for safe, readable index operations.

## Architecture

```
coreindexes/
├── indexes.go                    # Named constants: First..Tenth, Index0..Index20, I0..I20 (deprecated)
├── vars.go                       # indexByNameMap for ordinal name lookup
├── Of.go                         # Find position of value in []int
├── HasIndex.go                   # Check if value exists in []int
├── HasIndexPlusRemoveIndex.go    # Check + remove value from []int
├── IsInvalidIndex.go             # Check if index ≤ InvalidIndex
├── IsWithinIndexRange.go         # Check if index is within slice bounds
├── LastIndex.go                  # length - 1
├── SafeEndingIndex.go            # Clamp ending index to slice bounds
└── NameByIndex.go                # Ordinal name for index (0→"First", 1→"Second", ...)
```

## Constants

| Constant Group | Range | Description |
|---|---|---|
| `First` .. `Tenth` | 0–9 | Ordinal-named index constants |
| `Index0` .. `Index20` | 0–20 | Numeric-named index constants |
| `I0` .. `I20` | 0–20 | **Deprecated** — use `Index0`..`Index20` |

## Functions

| Function | Signature | Description |
|---|---|---|
| `Of` | `([]int, int) int` | Index-of for int slices; returns `-1` if not found |
| `HasIndex` | `([]int, int) bool` | True if value exists in the slice |
| `HasIndexPlusRemoveIndex` | `(*[]int, int) bool` | Check + mutate-remove the value from the slice |
| `IsInvalidIndex` | `(int) bool` | True if index ≤ `constants.InvalidIndex` |
| `IsWithinIndexRange` | `(int, int) bool` | True if `index ≤ length-1` |
| `LastIndex` | `(int) int` | Returns `length - 1` |
| `SafeEndingIndex` | `(int, int) int` | Returns `min(length-1, lastTakingIndex)` |
| `NameByIndex` | `(int) string` | Ordinal name ("First", "Second", ...) for indices 0–9 |

## Usage Examples

```go
import "github.com/alimtvnetwork/core-v9/coreindexes"

// Named constants
item := slice[coreindexes.First]  // slice[0]
item = slice[coreindexes.Third]   // slice[2]

// Safe bounds
end := coreindexes.SafeEndingIndex(len(data), 100)
subset := data[:end+1]

// Lookup
pos := coreindexes.Of(indexes, 42)  // -1 if not found
name := coreindexes.NameByIndex(0)  // "First"
```

## Related Docs

- [constants](../constants/readme.md) — `InvalidIndex` and other sentinel values
