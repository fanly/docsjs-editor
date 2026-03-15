# API Reference

## Main Exports

- `EditorSwitchboard` - Main class for managing editor connections
- `createBuiltinAdapter` - Create adapter for built-in editors
- `bindDocsjsChangeToEditor` - Bind DocsJS change events to editor
- `importHtmlSnapshotToEditor` - Import HTML to editor

## Browser-Safe Entry

```ts
// No DocsJS parser dependency
import { EditorSwitchboard } from "@coding01/docsjs-editor/browser";
```

## Related

- [EditorSwitchboard](./switchboard)
- [Adapters](./adapters)
