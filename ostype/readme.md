# ostype

Enum-based operating system detection providing both OS **Variation** (specific OS) and **Group** (Windows / Unix / Android) classification. Built on `enumimpl.BasicByte` with full JSON marshalling support.

## Architecture

```
ostype/
├── Variation.go          # Variation enum: Any, Windows, Linux, DarwinOrMacOs, FreeBsd, ...
├── Group.go              # Group enum: WindowsGroup, UnixGroup, AndroidGroup, InvalidGroup
├── GroupVariant.go        # GroupVariant composite struct
├── GetCurrentGroup.go    # Detect current OS group via runtime.GOOS
├── GetCurrentVariant.go  # Detect current OS variant via runtime.GOOS
├── GetGroupVariant.go    # Detect both group + variant at once
├── GetGroupVariantPtr.go # Pointer variant of GetGroupVariant
├── GetGroup.go           # Map GOOS string → Group
├── GetVariant.go         # Map GOOS string → Variation
├── maps.go               # Bidirectional Variation ↔ string lookup maps
└── vars.go               # Package-level singletons and enum impl instances
```

## Enums

### Variation (OS-specific)

| Value | Description |
|---|---|
| `Any` | Wildcard / all operating systems |
| `Unknown` | Unrecognized GOOS value |
| `Windows` | Microsoft Windows |
| `Linux` | Linux |
| `DarwinOrMacOs` | macOS / Darwin |
| `JavaScript` | JS runtime (wasm) |
| `FreeBsd`, `NetBsd`, `OpenBsd`, `DragonFly` | BSD variants |
| `Android` | Android |
| `Plan9`, `Solaris`, `Nacl`, `Illumos`, `IOs`, `Aix` | Other platforms |

### Group (OS family)

| Value | Description |
|---|---|
| `WindowsGroup` | Windows family |
| `UnixGroup` | Unix-like (Linux, macOS, BSDs, etc.) |
| `AndroidGroup` | Android family |
| `InvalidGroup` | Unrecognized |

## Key Methods

### Variation

| Method | Description |
|---|---|
| `Group()` | Returns the `Group` for this variation |
| `IsWindows()`, `IsLinux()`, `IsDarwinOrMacOs()` | Direct OS checks |
| `IsLinuxOrMac()` | Combined check |
| `IsPossibleUnixGroup()` | True if variation ≠ Windows |
| `IsActualGroupUnix()` | True if `Group()` is `UnixGroup` |
| `MarshalJSON()` / `UnmarshalJSON()` | JSON roundtrip support |

### Group

| Method | Description |
|---|---|
| `IsWindows()`, `IsUnix()`, `IsAndroid()` | Direct group checks |
| `MarshalJSON()` / `UnmarshalJSON()` | JSON roundtrip support |

### Detection

| Function | Description |
|---|---|
| `GetCurrentGroup()` | Current OS group from `runtime.GOOS` |
| `GetCurrentVariant()` | Current OS variation from `runtime.GOOS` |
| `GetGroupVariant()` | Both group + variant as `GroupVariant` |
| `GetGroup(goos)` | Map a GOOS string to `Group` |
| `GetVariant(goos)` | Map a GOOS string to `Variation` |

## Usage Examples

```go
import "github.com/alimtvnetwork/core-v9/ostype"

// Runtime detection
gv := ostype.GetGroupVariant()
fmt.Println(gv.Group)     // e.g. UnixGroup
fmt.Println(gv.Variation) // e.g. Linux

// Direct checks
if ostype.Type.IsLinuxOrMac() {
    // Unix-like path handling
}

// From string
v := ostype.GetVariant("linux")
fmt.Println(v.Group().IsUnix()) // true
```

## Related Docs

- [osconsts](../osconsts/readme.md) — raw GOOS string constants and group maps
- [enumimpl](../coreimpl/enumimpl/readme.md) — underlying enum implementation
