# Vue Integration

## Composition API

```vue
<script setup>
import { ref, onMounted } from "vue";
import { useEditorSwitchboard } from "@coding01/docsjs-editor/vue";
import { useEditor } from "@tiptap/vue-3";

const editor = useEditor({ extensions: [StarterKit] });
const { setHtml, switchTo } = useEditorSwitchboard();

const handleImportDocsJS = async (html: string) => {
  await setHtml(html);
};
</script>

<template>
  <div>
    <button @click="switchTo('quill', quillRef)">
      Switch to Quill
    </button>
  </div>
</template>
```

## Bind DocsJS Changes

```vue
<script setup>
import { bindDocsjsChangeToEditor } from "@docsjs-editor/vue";

onMounted(() => {
  const unbind = bindDocsjsChangeToEditor(
    docsWordElement,
    tiptapEditor
  );
  
  onUnmounted(unbind);
});
</script>

<template>
  <docs-word-editor ref="docsRef" />
  <TiptapEditor ref="editorRef" />
</template>
```

## Related

- [React Integration](./react)
- [Vue Demo](https://github.com/fanly/docsjs-editor/blob/main/demos/vue-demo/)
