# Examples

## Runtime Editor Switching

The most powerful feature of DocsJS Editor is runtime switching between editors.

### Demo

```html
<!-- See demos/multi-switch.html for full demo -->
<script type="module">
  import { EditorSwitchboard } from "@coding01/docsjs-editor";
  
  const switchboard = new EditorSwitchboard();
  
  // Connect Tiptap
  const tiptapAdapter = switchboard.connect("tiptap", tiptapEditor);
  
  // Later, switch to Quill
  await switchboard.switchTo("quill", quillEditor);
</script>
```

## Related Examples

- [React Integration](./react)
- [Vue Integration](./vue)
- [Tiptap Switch Demo](https://github.com/fanly/docsjs-editor/blob/main/demos/tiptap-switch.html)
- [Multi-Switch Demo](https://github.com/fanly/docsjs-editor/blob/main/demos/multi-switch.html)
