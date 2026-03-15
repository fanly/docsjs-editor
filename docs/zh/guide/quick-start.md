# 快速开始

## 基本用法

### 1. 创建 Switchboard

```ts
import { EditorSwitchboard } from "@coding01/docsjs-editor";

const switchboard = new EditorSwitchboard();
```

### 2. 连接编辑器

```ts
import { TiptapAdapter } from "@coding01/docsjs-editor/adapters/tiptap";

const adapter = switchboard.connect("tiptap", tiptapEditorInstance, {
  // 适配器选项
});
```

### 3. 设置 HTML 内容

```ts
// 从 DocsJS 快照设置 HTML
await switchboard.setHtml(docsjsHtmlSnapshot);
```

### 4. 运行时切换编辑器

```ts
// 切换到 Quill 并保留内容
await switchboard.switchTo("quill", quillEditorInstance);
```

## React 示例

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
      <button onClick={() => switchTo("quill", quillRef)}>切换到 Quill</button>
    </div>
  );
}
```

## 下一步

- [API 参考](../api/)
- [示例](../examples/)
- [编辑器能力矩阵](https://github.com/fanly/docsjs-editor/blob/main/docs/EDITOR_CAPABILITY_MATRIX.md)
