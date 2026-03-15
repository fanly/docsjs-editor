---
layout: home

hero:
  name: DocsJS Editor
  text: Multi-Editor Integration Bridge
  tagline: Switch between Tiptap, Quill, CKEditor and more at runtime. Built for DocsJS workflows.
  image:
    src: /logo.svg
    alt: DocsJS Editor Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/fanly/docsjs-editor
    - theme: alt
      text: npm Package
      link: https://www.npmjs.com/package/@coding01/docsjs-editor

features:
  - icon: 🔄
    title: Runtime Switching
    details: Switch between editors (Tiptap, Quill, CKEditor, etc.) at runtime while preserving content.
  - icon: 🎯
    title: Unified API
    details: Single interface for all supported editors. No need to learn different APIs.
  - icon: 🔗
    title: DocsJS Integration
    details: Seamlessly import DocsJS HTML snapshots into any supported editor.
  - icon: ⚡
    title: Lightweight
    details: Tree-shakeable, minimal bundle overhead (~7KB gzipped).
  - icon: 🧩
    title: Extensible
    details: Easy to add support for new editors with the adapter system.
  - icon: 🏗️
    title: Framework Ready
    details: First-class support for React, Vue, and vanilla JavaScript.
---

<div class="stats-bar">
  <div class="stat-item">
    <div class="stat-value">8+</div>
    <div class="stat-label">Supported Editors</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">v0.1.2</div>
    <div class="stat-label">Latest Version</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">~7KB</div>
    <div class="stat-label">Bundle Size</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">3</div>
    <div class="stat-label">Framework Adapters</div>
  </div>
</div>

## Supported Editors

| Editor | Status | Notes |
|--------|--------|-------|
| Tiptap | ✅ Full Support | Best experience with DocsJS |
| Quill | ✅ Full Support | Rich text editing |
| CKEditor 5 | ✅ Full Support | Enterprise-grade |
| TinyMCE | ✅ Full Support | Cloud & self-hosted |
| Toast UI | ✅ Full Support | Korean editor |
| WangEditor | ✅ Full Support | Chinese editor |
| ProseMirror | 🔄 Via Hooks | Low-level |
| Lexical | 🔄 Via Hooks | Facebook's editor |

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

<div class="feature-grid">
  <div class="feature-card">
    <h3>📄 DocsJS</h3>
    <p>High-fidelity Word/DOCX import. Use as the source for HTML snapshots.</p>
    <a href="https://docsjs.coding01.cn">View Docs →</a>
  </div>
  <div class="feature-card">
    <h3>📝 DocsJS Markdown</h3>
    <p>Convert DocsJS HTML to Markdown. Perfect for knowledge bases.</p>
    <a href="https://markdown.docsjs.coding01.cn">View Docs →</a>
  </div>
</div>

## Sponsors

<div class="stats-bar" style="opacity: 0.7; font-size: 14px;">
  <span>React</span>
  <span>Vue</span>
  <span>TypeScript</span>
  <span>Vite+</span>
</div>
