# @coding01/docsjs-editor

Multi-editor integration bridge for docsjs.
Import docsjs HTML snapshots (or DOCX via docsjs parser) into mainstream editors and switch between editors with a unified API.

[![npm version](https://img.shields.io/npm/v/@coding01/docsjs-editor)](https://www.npmjs.com/package/@coding01/docsjs-editor)
[![npm downloads](https://img.shields.io/npm/dm/@coding01/docsjs-editor)](https://www.npmjs.com/package/@coding01/docsjs-editor)
[![License](https://img.shields.io/npm/l/@coding01/docsjs-editor)](./LICENSE)

---

[中文文档](./README.zh-CN.md)

## What You Get

- Unified adapter API for mainstream editors
- Runtime editor switching with content preservation
- docsjs event bridge (`docsjs-change -> editor.setHtml`)
- DOCX import through docsjs parser and direct injection into editor

Supported editor adapter types:

- `tiptap`
- `quill`
- `ckeditor5`
- `tinymce`
- `toast-ui`
- `wangeditor`
- `prosemirror` (via host hooks)
- `lexical` (via host hooks)
- `slate` (via host hooks)

## Recommended Pair: @coding01/docsjs

Use `@coding01/docsjs` as the high-fidelity Word/DOCX import source, then feed HTML snapshots into `@coding01/docsjs-editor`.

- npm: https://www.npmjs.com/package/@coding01/docsjs
- GitHub: https://github.com/fanly/docsjs
- Product page: https://docsjs.coding01.cn/

## Installation

```bash
npm i @coding01/docsjs-editor
```

## Quick Start

```ts
import { EditorSwitchboard, bindDocsjsChangeToEditor } from "@coding01/docsjs-editor";

const switchboard = new EditorSwitchboard();
const adapter = switchboard.connect("tiptap", tiptapEditor as unknown as Record<string, unknown>);

// Inject html snapshot
await switchboard.setHtml("<h1>Hello</h1><p>docsjs snapshot</p>");

// Bind docsjs component changes
const unbind = bindDocsjsChangeToEditor(docsjsElement, adapter);

// Runtime switch to another editor
await switchboard.switchTo("quill", quillEditor as unknown as Record<string, unknown>);

// later
unbind();
```

## API

- Browser-safe entry (no docsjs parser export): `@coding01/docsjs-editor/browser`
- `createBuiltinAdapter({ type, instance }, options)`
- `new EditorSwitchboard()`
  - `connect(type, instance, options)`
  - `switchTo(type, instance, options)`
  - `setHtml(html)`
  - `getHtml()`
- `importHtmlSnapshotToEditor(html, adapter)`
- `importDocxToEditor(file, adapter, options)`
- `bindDocsjsChangeToEditor(host, adapter)`
- `buildCompatibilityReport(html, editorType)`
- `applyFallbackPolicy(html, report)`

## Demos

- Multi-editor runtime switch demo: `demos/multi-switch.html`
- Tiptap + Quill switch demo: `demos/tiptap-switch.html`
- React demo: `demos/react-demo/index.html`
- Vue demo: `demos/vue-demo/index.html`
- React + Vite engineering template: `demos/react-vite/`
- Vue + Vite engineering template: `demos/vue-vite/`
- Demo guide: `demos/README.md`

## Integration Docs

- Capability matrix: `docs/EDITOR_CAPABILITY_MATRIX.md`
- Integration guide: `docs/INTEGRATION_GUIDE.md`
- Roadmap: `docs/EDITOR_INTEGRATION_ROADMAP.md`

## Landing Page Template Rule

For docsjs ecosystem plugin pages, we keep one shared page architecture template:

- Spec file: `docs/LANDING_TEMPLATE.md`
- Concrete page: `docs/index.html`

## Development

```bash
npm install
npm run verify
npm run build
npm run benchmark:switchboard
npx playwright install chromium
npm run test:e2e
```

Benchmark output artifact:

- `artifacts/benchmark-switchboard.json`

## Publishing

### Manual

```bash
npm version patch
git push origin main --follow-tags
npm publish --access public
```

### Suggested CI Rule (same as docsjs/docsjs-markdown)

- Trigger by tag: `v*.*.*`
- Run quality gate: `npm run verify`
- Publish package: `npm publish --access public`

### GitHub Packages

- Workflow: `.github/workflows/publish-github-packages.yml`
- Trigger: tag `v*.*.*` or manual run
- Registry: `https://npm.pkg.github.com`
- Package name for GitHub Packages: `@fanly/docsjs-editor`

## License

MIT
