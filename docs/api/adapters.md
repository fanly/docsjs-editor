# Adapters

## Built-in Adapters

| Adapter | Type | Support |
|---------|------|---------|
| tiptap | `tiptap` | ✅ Full |
| quill | `quill` | ✅ Full |
| ckeditor5 | `ckeditor5` | ✅ Full |
| tinymce | `tinymce` | ✅ Full |
| toastui | `toast-ui` | ✅ Full |
| wangeditor | `wangeditor` | ✅ Full |

## Creating Custom Adapters

```ts
import { createBuiltinAdapter, type EditorAdapter } from "@coding01/docsjs-editor";

const customAdapter: EditorAdapter = createBuiltinAdapter(
  { type: "custom", instance: myEditor },
  {
    getHtml: () => myEditor.getHTML(),
    setHtml: (html) => myEditor.setHTML(html),
  }
);
```

## Adapter Interface

```ts
interface EditorAdapter {
  type: string;
  instance: unknown;
  getHtml(): Promise<string> | string;
  setHtml(html: string): Promise<void> | void;
  getText?(): Promise<string> | string;
  focus?(): void;
  blur?(): void;
}
```
