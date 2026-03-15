# 适配器

## 内置适配器

| 适配器 | 类型 | 支持 |
|--------|------|------|
| tiptap | `tiptap` | ✅ 完全 |
| quill | `quill` | ✅ 完全 |
| ckeditor5 | `ckeditor5` | ✅ 完全 |
| tinymce | `tinymce` | ✅ 完全 |
| toastui | `toast-ui` | ✅ 完全 |
| wangeditor | `wangeditor` | ✅ 完全 |

## 创建自定义适配器

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

## 适配器接口

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
