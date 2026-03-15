# React Integration

## Hook-based API

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
      <button onClick={() => switchTo("quill", quillRef)}>
        Switch to Quill
      </button>
    </div>
  );
}
```

## Bind DocsJS Changes

```tsx
import { bindDocsjsChangeToEditor } from "@coding01/docsjs-editor/react";

function DocsJSEditorWrapper() {
  const docsRef = useRef(null);
  const editorRef = useRef(null);
  
  useEffect(() => {
    if (docsRef.current && editorRef.current) {
      const unbind = bindDocsjsChangeToEditor(
        docsRef.current,
        editorRef.current
      );
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

## Related

- [Vue Integration](./vue)
- [React Demo](https://github.com/fanly/docsjs-editor/blob/main/demos/react-demo/)
