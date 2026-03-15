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
    icon: 🌐
  - title: Switchboard Runtime
    details: Switch editor providers at runtime while preserving content and avoiding integration rewrites.
    icon: 🔄
  - title: docsjs Native Bridge
    details: Connect docsjs snapshots directly into target editors so import and editing stay in one technical path.
    icon: 🔗
  - title: Ecosystem Pairing
    details: Pair with docsjs as a canonical source and keep one content stream consistent across multiple editor providers.
    icon: 🌿
  - title: Demo & Matrix Ready
    details: Use demos and capability matrix to choose editor stacks faster and reduce migration risk.
    icon: 🗺️
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

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">🌐</div>
    <h3>Mainstream Coverage</h3>
    <p>Built-in adapters cover mainstream editors first, with extensible hooks for Lexical, Slate, and ProseMirror stacks.</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🔄</div>
    <h3>Switchboard Runtime</h3>
    <p>Switch editor providers at runtime while preserving content and avoiding integration rewrites.</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🔗</div>
    <h3>docsjs Native Bridge</h3>
    <p>Connect docsjs snapshots directly into target editors so import and editing stay in one technical path.</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🌿</div>
    <h3>Ecosystem Pairing</h3>
    <p>Pair with docsjs as a canonical source and keep one content stream consistent across multiple editor providers.</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🗺️</div>
    <h3>Demo & Matrix Ready</h3>
    <p>Use demos and capability matrix to choose editor stacks faster and reduce migration risk.</p>
  </div>
</div>

## Framework Quick Start

<div class="framework-grid">
  <div class="framework-card">
    <h3>React</h3>
    <p>Runtime switch demo with one docsjs content source and two editor providers.</p>
    <a href="https://github.com/fanly/docsjs-editor/blob/main/demos/react-demo/index.html">Open React demo →</a>
  </div>
  <div class="framework-card">
    <h3>Vue</h3>
    <p>Vue state-driven provider switching with consistent content behavior.</p>
    <a href="https://github.com/fanly/docsjs-editor/blob/main/demos/vue-demo/index.html">Open Vue demo →</a>
  </div>
  <div class="framework-card">
    <h3>Vanilla / CDN</h3>
    <p>5-editor panel to benchmark integration effort before committing a stack.</p>
    <a href="https://github.com/fanly/docsjs-editor/blob/main/demos/multi-switch.html">Open 5-editor demo →</a>
  </div>
</div>

## Complete Case: One content, multiple editor adapters

<div class="showcase">
  <div class="showcase-code">
<pre><code class="language-ts">import { EditorSwitchboard } from "@coding01/docsjs-editor";

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
await switchboard.setHtml(canonicalHtml);</code></pre>
  </div>
  <div class="showcase-panels">
    <div class="showcase-panel">
      <div class="panel-label">Left: docsjs HTML snapshot</div>
      <pre><code class="language-html"><h1>Quarter Plan</h1>
<p>One source content rendered across multiple editor engines.</p>
<ul>
  <li>DOCX fidelity import</li>
  <li>Editor runtime switch</li>
  <li>Content parity checks</li>
</ul></code></pre>
    </div>
    <div class="showcase-panel">
      <div class="panel-label">Right: same content after adapter switch</div>
      <pre><code class="language-json">{
  "activeEditor": "quill",
  "source": "docsjs snapshot",
  "sameHeading": true,
  "sameListCount": 3,
  "parityCheck": "pass",
  "preview": "Quarter Plan | DOCX fidelity import | Editor runtime switch | Content parity checks"
}</code></pre>
    </div>
  </div>
</div>

## API Reference

<div class="api-grid">
  <div class="api-card">
    <h3>Switchboard</h3>
    <p><code>connect()</code> / <code>switchTo()</code> / <code>setHtml()</code> / <code>getHtml()</code></p>
  </div>
  <div class="api-card">
    <h3>docsjs Bridge</h3>
    <p><code>bindDocsjsChangeToEditor()</code> / <code>importDocxToEditor()</code></p>
  </div>
  <div class="api-card">
    <h3>Adapters</h3>
    <p><code>createBuiltinAdapter()</code> with mainstream editor types</p>
  </div>
</div>

## Engineering Trust Signals

<div class="trust-grid">
  <div class="trust-card">
    <h3>CI</h3>
    <p>Push to main: run verify quality gate.</p>
  </div>
  <div class="trust-card">
    <h3>npm</h3>
    <p>Push tag v*.*.*: publish npm package.</p>
  </div>
  <div class="trust-card">
    <h3>Pages</h3>
    <p>Update docs/** on main: deploy landing page.</p>
  </div>
</div>

## Recommended Ecosystem Path

<p>Use docsjs for fidelity import, docsjs-editor for runtime editor switching, and docsjs-markdown for final markdown delivery.</p>

<div class="ecosystem-flow">
  <span class="eco-badge">@coding01/docsjs</span>
  <span class="eco-arrow">→</span>
  <span class="eco-badge">@coding01/docsjs-editor</span>
  <span class="eco-arrow">→</span>
  <span class="eco-badge">@coding01/docsjs-markdown</span>
</div>
<div class="ecosystem-label">Theme Switchable</div>

<div class="demo-links">
  <a href="https://github.com/fanly/docsjs-editor/tree/main/demos">Open demos</a> ·
  <a href="https://github.com/fanly/docsjs-editor/blob/main/demos/multi-switch.html">Try 5-editor demo</a> ·
  <a href="https://github.com/fanly/docsjs-editor/blob/main/demos/react-demo/index.html">React demo</a> ·
  <a href="https://github.com/fanly/docsjs-editor/blob/main/demos/vue-demo/index.html">Vue demo</a> ·
  <a href="https://github.com/fanly/docsjs-editor/blob/main/docs/EDITOR_CAPABILITY_MATRIX.md">Open capability matrix</a>
</div>

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

| Package                                            | Description                    |
| -------------------------------------------------- | ------------------------------ |
| [DocsJS](https://docsjs.coding01.cn)               | High-fidelity Word/DOCX import |
| [DocsJS Markdown](https://fanly.github.io/docsjs-markdown/) | Markdown output conversion     |

## Sponsors

<div class="sponsors-bar">
  <span>React</span>
  <span>Vue</span>
  <span>TypeScript</span>
  <span>ES2022</span>
  <span>Vite+</span>
</div>
