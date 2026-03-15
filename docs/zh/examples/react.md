# React 集成

## Hook API

```tsx
import { useEditorSwitchboard } from "@coding01/docsjs-editor/react";
import { useEditor } from "@tiptap/react";

function EditorComponent() {
  const editor = useEditor({ extensions: [StarterKit] });
  const { setHtml, switchTo } = useEditorSwitchboard();

  const handleImportDocsJS = async (html: string) => {
    await setHtml(html);
  };

  return (
    <div>
      <button onClick={() => switchTo("quill", quillRef)}>切换到 Quill</button>
    </div>
  );
}
```

## 绑定 DocsJS 更改

```tsx
import { bindDocsjsChangeToEditor } from "@coding01/docsjs-editor/react";

function DocsJSEditorWrapper() {
  const docsRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (docsRef.current && editorRef.current) {
      const unbind = bindDocsjsChangeToEditor(docsRef.current, editorRef.current);
      return unbind;
    }
  }, []);

  return (
    <div>
      <docs-word-editor ref={docsRef} />
      <TiptapEditor ref={editorRef} />
    </div>
  );
}
```

## 相关链接

- [Vue 集成](./vue)
- [React 示例](https://github.com/fanly/docsjs-editor/blob/main/demos/react-demo/)
