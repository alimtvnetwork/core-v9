# coretaskinfo — Task Metadata Container

Package `coretaskinfo` provides the `Info` struct for carrying metadata about tasks, errors, or operations — name, description, URLs, examples, security flags, and exclusion options. Used throughout the codebase to attach rich context to errors, validators, and API operations.

## Architecture

```
coretaskinfo/
├── Info.go                       # Info struct — metadata container (640+ lines)
├── ExcludingOptions.go           # ExcludingOptions — field visibility flags
├── newCreator.go                 # newCreator — root creator struct
├── newInfoCreator.go             # newInfoCreator — Default, Examples, Create factories
├── newInfoPlainTextCreator.go    # newInfoPlainTextCreator — plain text factories
├── newInfoSecureTextCreator.go   # newInfoSecureTextCreator — secure text factories
├── consts.go                     # Internal constants
└── vars.go                       # New = newCreator{}
```

## Entry Points

| Variable | Type | Description |
|----------|------|-------------|
| `New` | `newCreator` | Root creator with `Info`, `Info.Plain`, `Info.Secure` sub-creators |

## Info Struct

```go
type Info struct {
    RootName       string            `json:"RootName,omitempty"`
    Description    string            `json:"Description,omitempty"`
    Url            string            `json:"Url,omitempty"`
    HintUrl        string            `json:"HintUrl,omitempty"`
    ErrorUrl       string            `json:"ErrorUrl,omitempty"`
    ExampleUrl     string            `json:"ExampleUrl,omitempty"`
    SingleExample  string            `json:"SingleExample,omitempty"`
    Examples       []string          `json:"Examples,omitempty"`
    ExcludeOptions *ExcludingOptions `json:"ExcludeOptions,omitempty"`
}
```

## Factory Methods

### `New.Info.*`

| Method | Description |
|--------|-------------|
| `Default(name, desc, url)` | Basic info with name, description, URL |
| `Examples(name, desc, url, ...examples)` | Info with usage examples |
| `Create(isSecure, name, desc, url, hint, err, example, chaining, ...examples)` | Full creation |
| `SecureCreate(...)` | Full creation with secure flag |
| `PlainCreate(...)` | Full creation without secure flag |
| `Deserialized([]byte)` | Parse from JSON bytes |
| `DeserializedUsingJsonResult(result)` | Parse from corejson.Result |

### `New.Info.Secure.*`

| Method | Description |
|--------|-------------|
| `Default(name, desc, url)` | Secure info (payloads excluded from logging) |
| `Examples(name, desc, url, ...examples)` | Secure info with examples |

### `New.Info.Plain.*`

| Method | Description |
|--------|-------------|
| `Default(name, desc, url)` | Plain text info (payloads included in logging) |
| `Examples(name, desc, url, ...examples)` | Plain text info with examples |

## Key Methods

### Nil-Safe Accessors

All pointer-receiver methods are nil-safe — they return zero values on nil receiver:

| Method | Returns |
|--------|---------|
| `SafeName()` | `""` on nil |
| `SafeDescription()` | `""` on nil |
| `SafeUrl()` | `""` on nil |
| `SafeHintUrl()` | `""` on nil |
| `SafeErrorUrl()` | `""` on nil |
| `SafeExampleUrl()` | `""` on nil |

### State Checks

| Method | Description |
|--------|-------------|
| `IsNull()` / `IsDefined()` | Nil check / has name |
| `IsEmpty()` | Same as `IsNull()` |
| `IsSecure()` | Payloads excluded from logging |
| `IsPlainText()` | Payloads included (default on nil) |
| `HasRootName()` / `HasDescription()` / `HasUrl()` | Field presence checks |
| `IsEmptyName()` / `IsEmptyDescription()` / `IsEmptyUrl()` | Field emptiness checks |

### Include/Exclude Checks

Controls which fields appear in output based on `ExcludingOptions`:

| Method | Description |
|--------|-------------|
| `IsIncludeRootName()` | Field included and non-empty |
| `IsIncludePayloads()` | Payloads visible (true on nil) |
| `IsExcludeRootName()` | Field explicitly excluded |
| `IsExcludeAdditionalErrorWrap()` | Error wrap excluded |

### Serialization

| Method | Description |
|--------|-------------|
| `Json()` / `JsonPtr()` | Create `corejson.Result` |
| `JsonString()` | Compact JSON string |
| `PrettyJsonString()` | Pretty-printed JSON |
| `LazyMapPrettyJsonString()` | Pretty JSON from lazy map |
| `Serialize()` | Raw JSON bytes |

### Cloning

| Method | Description |
|--------|-------------|
| `Clone()` | Value copy |
| `ClonePtr()` | Pointer copy (nil-safe) |
| `ToPtr()` / `ToNonPtr()` | Pointer conversion |

## Usage

```go
import "github.com/alimtvnetwork/core-v9/coretaskinfo"

// Basic creation
info := coretaskinfo.New.Info.Default(
    "user-validation",
    "Validates user input fields",
    "https://docs.example.com/validation",
)

// Secure (hides payloads in logs)
secureInfo := coretaskinfo.New.Info.Secure.Default(
    "password-reset",
    "Handles password reset",
    "https://docs.example.com/reset",
)

// With examples
info = coretaskinfo.New.Info.Examples(
    "email-format",
    "RFC 5322 email validation",
    "https://tools.ietf.org/html/rfc5322",
    `validate("user@example.com")`,
    `validate("bad@")`,
)

// Nil-safe access
var nilInfo *coretaskinfo.Info
fmt.Println(nilInfo.SafeName())    // ""
fmt.Println(nilInfo.IsPlainText()) // true (default)

// Clone
copied := info.Clone()

// JSON
jsonStr := info.PrettyJsonString()
```

## Related Docs

- [Coding Guidelines](/spec/01-app/17-coding-guidelines.md)
- [New Creator Pattern](/spec/01-app/18-new-creator-convention.md)
- [Folder Spec](/spec/01-app/folders/10-remaining-packages.md)
