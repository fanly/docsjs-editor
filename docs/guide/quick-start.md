# Quick Start

## Basic Usage

### 1. Create a Switchboard

```ts
import { EditorSwitchboard } from "@coding01/docsjs-editor";

const switchboard = new EditorSwitchboard();
```

### 2. Connect an Editor

```ts
import { TiptapAdapter } from "@coding01/docsjs-editor/adapters/tiptap";

const adapter = switchboard.connect("tiptap", tiptapEditorInstance, {
  // Adapter options
});
```

### 3. Set HTML Content

```ts
// Set HTML from DocsJS snapshot
await switchboard.setHtml(docsjsHtmlSnapshot);
```

### 4. Switch Editors at Runtime

```ts
// Switch to Quill while preserving content
await switchboard.switchTo("quill", quillEditorInstance);
```

## React Example

```tsx
import { useEditorSwitchboard } from "@coding01/docsjs-editor/react";
import { useEditor } from "@tiptap/react";

function App() {
  const { setHtml, switchTo } = useEditorSwitchboard();

  const handleImport = async (html: string) => {
    await setHtml(html);
  };

  return (
    <div>
      <button onClick={() => switchTo("quill", quillRef)}>
        Switch to Quill
      </button>
    </div>
  );
}
```

## Next Steps

- [API Reference](../api/)
- [Examples](../examples/)
- [Editor Capability Matrix](https://github.com/fanly/docsjs-editor/blob/main/docs/EDITOR_CAPABILITY_MATRIX.md)
