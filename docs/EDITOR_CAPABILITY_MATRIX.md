# Editor Capability Matrix

This matrix describes practical integration coverage in `@coding01/docsjs-editor`.

## Legend

- `Native`: adapter works with native editor APIs directly
- `Host hook`: requires host-side `setHtml/getHtml` bridge
- `Planned`: roadmap target

## Matrix

| Editor | Adapter Type | set/get HTML | Runtime Switch | docsjs Event Bridge | Notes |
|---|---|---|---|---|---|
| Tiptap | `tiptap` | Native | Yes | Yes | Uses `commands.setContent` + `getHTML` |
| Quill | `quill` | Native | Yes | Yes | Uses `clipboard.dangerouslyPasteHTML` + `root.innerHTML` |
| CKEditor5 | `ckeditor5` | Native | Yes | Yes | Uses `setData/getData` |
| TinyMCE | `tinymce` | Native | Yes | Yes | Uses `setContent/getContent` |
| Toast UI Editor | `toast-ui` | Native | Yes | Yes | Uses `setHTML/getHTML` |
| WangEditor | `wangeditor` | Native | Yes | Yes | Uses `setHtml/getHtml` |
| ProseMirror | `prosemirror` | Host hook | Yes | Yes | Provide host `setHtml/getHtml` bridge |
| Lexical | `lexical` | Host hook | Yes | Yes | Provide host `setHtml/getHtml` bridge |
| Slate | `slate` | Host hook | Yes | Yes | Provide host `setHtml/getHtml` bridge |

## Production Recommendation

1. If you need fastest delivery: choose `quill` / `ckeditor5` / `tinymce` first.
2. If you need deep schema control: use `tiptap` with schema-level policies.
3. For Lexical/Slate/ProseMirror projects: keep editor-specific HTML bridge in host layer and plug into `docsjs-editor` as custom hooks.
4. Use `buildCompatibilityReport` + `applyFallbackPolicy` before injection when your docsjs output contains complex nodes.

## Migration Strategy

1. Start with one adapter and standardize business APIs around `EditorSwitchboard`.
2. Introduce a second editor for A/B or enterprise tenant routing.
3. Use `switchTo()` to retain content while switching provider.
4. Add output checks for list/table fidelity before full rollout.
