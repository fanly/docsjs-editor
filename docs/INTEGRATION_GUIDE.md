# Integration Guide

## 1) Connect an editor

```ts
import { EditorSwitchboard } from "@coding01/docsjs-editor";

const board = new EditorSwitchboard();
board.connect("quill", quillEditor as unknown as Record<string, unknown>);
```

## 2) Inject docsjs snapshot

```ts
await board.setHtml(htmlSnapshot);
```

## 3) Bind docsjs element updates

```ts
import { bindDocsjsChangeToEditor } from "@coding01/docsjs-editor";

const unbind = bindDocsjsChangeToEditor(docsjsElement, board.getCurrentAdapter());
```

## 4) Switch provider at runtime

```ts
await board.switchTo("ckeditor5", ckEditorInstance as unknown as Record<string, unknown>);
```

## 5) Import DOCX through docsjs parser

```ts
import { importDocxToEditor } from "@coding01/docsjs-editor";

await importDocxToEditor(file, board.getCurrentAdapter());
```

## 6) Rollout checklist

- Define one canonical HTML policy for your product
- Add adapter matrix tests for your selected editors
- Verify list/table/heading behavior after each switch
- Add fallback mapping for editor-specific unsupported nodes

## 7) Compatibility report and fallback

```ts
import { buildCompatibilityReport, applyFallbackPolicy } from "@coding01/docsjs-editor";

const report = buildCompatibilityReport(htmlSnapshot, "quill");
const safeHtml = applyFallbackPolicy(htmlSnapshot, report);
await board.setHtml(safeHtml);
```
