---
layout: home

hero:
  name: DocsJS Editor
  text: One Bridge For Mainstream Editors
  tagline: Run one canonical docsjs content stream across mainstream editors, switch providers at runtime, and keep business APIs unchanged.
  image:
    src: /logo.svg
    alt: DocsJS Editor Logo
  actions:
    - theme: brand
      text: Get Package
      link: https://www.npmjs.com/package/@coding01/docsjs-editor
    - theme: brand
      text: Use with docsjs
      link: https://docsjs.coding01.cn
    - theme: alt
      text: View Case
      link: #showcase

features:
  - title: Mainstream Coverage
    details: Built-in adapters cover mainstream editors first, with extensible hooks for Lexical, Slate, and ProseMirror stacks.
  - title: Switchboard Runtime
    details: Switch editor providers at runtime while preserving content and avoiding integration rewrites.
  - title: docsjs Native Bridge
    details: Connect docsjs snapshots directly into target editors so import and editing stay in one technical path.
  - title: Ecosystem Pairing
    details: Pair with docsjs as a canonical source and keep one content stream consistent across multiple editor providers.
  - title: Demo and Matrix Ready
    details: Use demos and capability matrix to choose editor stacks faster and reduce migration risk.
---

<div class="stats-bar">
  <div class="stat-item">
    <div class="stat-value">9</div>
    <div class="stat-label">Mainstream Editors</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">1</div>
    <div class="stat-label">Business API</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">Runtime</div>
    <div class="stat-label">Provider Switch</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">MIT</div>
    <div class="stat-label">Open Source</div>
  </div>
</div>

## Why docsjs-editor?

- **Mainstream Coverage**: Built-in adapters cover mainstream editors first, with extensible hooks for Lexical, Slate, and ProseMirror stacks.
- **Switchboard Runtime**: Switch editor providers at runtime while preserving content and avoiding integration rewrites.
- **docsjs Native Bridge**: Connect docsjs snapshots directly into target editors so import and editing stay in one technical path.
- **Ecosystem Pairing**: Pair with docsjs as a canonical source and keep one content stream consistent across multiple editor providers.
- **Demo and Matrix Ready**: Use demos and capability matrix to choose editor stacks faster and reduce migration risk.

## Framework Quick Start

- **React**: Runtime switch demo with one docsjs content source and two editor providers. [Open React demo](https://github.com/fanly/docsjs-editor/blob/main/demos/react-demo/index.html)
- **Vue**: Vue state-driven provider switching with consistent content behavior. [Open Vue demo](https://github.com/fanly/docsjs-editor/blob/main/demos/vue-demo/index.html)
- **Vanilla / CDN**: 5-editor panel to benchmark integration effort before committing a stack. [Open 5-editor demo](https://github.com/fanly/docsjs-editor/blob/main/demos/multi-switch.html)

## Complete Case

```ts
import { EditorSwitchboard } from "@coding01/docsjs-editor";

const switchboard = new EditorSwitchboard();
switchboard.connect("tiptap", tiptapEditor);
switchboard.connect("quill", quillEditor);
switchboard.connect("ckeditor5", ckEditor);

const canonicalHtml = docsjsElement.getSnapshot();

await switchboard.switchTo("tiptap");
await switchboard.setHtml(canonicalHtml);

await switchboard.switchTo("quill");
await switchboard.setHtml(canonicalHtml);

await switchboard.switchTo("ckeditor5");
await switchboard.setHtml(canonicalHtml);
```

**Left: docsjs HTML snapshot**
```
<h1>Quarter Plan</h1>
<p>One source content rendered across multiple editor engines.</p>
<ul>
  <li>DOCX fidelity import</li>
  <li>Editor runtime switch</li>
  <li>Content parity checks</li>
</ul>
```

**Right: same content after adapter switch**
```
{
  "activeEditor": "quill",
  "source": "docsjs snapshot",
  "sameHeading": true,
  "sameListCount": 3,
  "parityCheck": "pass",
  "preview": "Quarter Plan | DOCX fidelity import | Editor runtime switch | Content parity checks"
}
```

## API Reference

- **Switchboard**: connect() / switchTo() / setHtml() / getHtml()
- **docsjs Bridge**: bindDocsjsChangeToEditor() / importDocxToEditor()
- **Adapters**: createBuiltinAdapter() with mainstream editor types

## Engineering Trust Signals

- **CI**: Push to main: run verify quality gate.
- **npm**: Push tag v*.*.*: publish npm package.
- **Pages**: Update docs/** on main: deploy landing page.

## Recommended Ecosystem Path

Use docsjs for fidelity import, docsjs-editor for runtime editor switching, and docsjs-markdown for final markdown delivery.

**@coding01/docsjs** → **@coding01/docsjs-editor** → **@coding01/docsjs-markdown**

[Open demos](https://github.com/fanly/docsjs-editor/tree/main/demos) · [Try 5-editor demo](https://github.com/fanly/docsjs-editor/blob/main/demos/multi-switch.html) · [React demo](https://github.com/fanly/docsjs-editor/blob/main/demos/react-demo/index.html) · [Vue demo](https://github.com/fanly/docsjs-editor/blob/main/demos/vue-demo/index.html) · [Open capability matrix](https://github.com/fanly/docsjs-editor/blob/main/docs/EDITOR_CAPABILITY_MATRIX.md)

## Quick Start

::: code-group

```bash [npm]
npm install @coding01/docsjs-editor
```

```bash [yarn]
yarn add @coding01/docsjs-editor
```

```bash [pnpm]
pnpm add @coding01/docsjs-editor
```

:::

### Connect an Editor

```ts
import { EditorSwitchboard } from "@coding01/docsjs-editor";

const switchboard = new EditorSwitchboard();
const adapter = switchboard.connect("tiptap", tiptapEditor);

// Inject DocsJS HTML snapshot
await switchboard.setHtml("<h1>Hello</h1><p>World</p>");
```

### Runtime Switch

```ts
// Switch to Quill at runtime
await switchboard.switchTo("quill", quillEditor);
```

## Ecosystem

| Package | Description |
|---------|-------------|
| [DocsJS](https://docsjs.coding01.cn) | High-fidelity Word/DOCX import |
| [DocsJS Markdown](https://fanly.github.io/docsjs-markdown/) | Markdown output conversion |

## Sponsors

<div class="sponsors-bar">
  <span>React</span>
  <span>Vue</span>
  <span>TypeScript</span>
  <span>ES2022</span>
  <span>Vite+</span>
</div>
