# 示例

## 运行时编辑器切换

DocsJS Editor 最强大的功能是在编辑器之间运行时切换。

### 示例

```html
<!-- 查看 demos/multi-switch.html 获取完整示例 -->
<script type="module">
  import { EditorSwitchboard } from "@coding01/docsjs-editor";
  
  const switchboard = new EditorSwitchboard();
  
  // 连接 Tiptap
  const tiptapAdapter = switchboard.connect("tiptap", tiptapEditor);
  
  // 稍后切换到 Quill
  await switchboard.switchTo("quill", quillEditor);
</script>
```

## 相关示例

- [React 集成](./react)
- [Vue 集成](./vue)
- [Tiptap 切换示例](https://github.com/fanly/docsjs-editor/blob/main/demos/tiptap-switch.html)
- [多编辑器切换示例](https://github.com/fanly/docsjs-editor/blob/main/demos/multi-switch.html)
