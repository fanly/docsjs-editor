---
layout: home

hero:
  name: DocsJS Editor
  text: 多编辑器集成桥接
  tagline: 在 Tiptap、Quill、CKEditor 等编辑器之间运行时切换。无缝集成 DocsJS 工作流。
  image:
    src: /logo.svg
    alt: DocsJS Editor Logo
  actions:
    - theme: brand
      text: 开始使用
      link: /zh/guide/
    - theme: alt
      text: GitHub
      link: https://github.com/fanly/docsjs-editor
    - theme: alt
      text: npm 包
      link: https://www.npmjs.com/package/@coding01/docsjs-editor

features:
  - icon: 🔄
    title: 运行时切换
    details: 在 Tiptap、Quill、CKEditor 等编辑器之间运行时切换，同时保留内容。
  - icon: 🎯
    title: 统一 API
    details: 单一接口适配所有支持的编辑器，无需学习不同的 API。
  - icon: 🔗
    title: DocsJS 集成
    details: 将 DocsJS HTML 快照无缝导入任何支持的编辑器。
  - icon: ⚡
    title: 轻量级
    details: Tree-shakeable，最小包体积 (~7KB gzipped)。
  - icon: 🧩
    title: 可扩展
    details: 通过适配器系统轻松添加对新编辑器的支持。
  - icon: 🏗️
    title: 框架就绪
    details: 一流的 React、Vue 和原生 JavaScript 支持。
---

<div class="stats-bar">
  <div class="stat-item">
    <div class="stat-value">8+</div>
    <div class="stat-label">支持的编辑器</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">v0.1.2</div>
    <div class="stat-label">当前版本</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">~7KB</div>
    <div class="stat-label">包体积</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">3</div>
    <div class="stat-label">框架适配器</div>
  </div>
</div>

## 支持的编辑器

| 编辑器 | 状态 | 备注 |
|--------|------|------|
| Tiptap | ✅ 完全支持 | 与 DocsJS 最佳体验 |
| Quill | ✅ 完全支持 | 富文本编辑 |
| CKEditor 5 | ✅ 完全支持 | 企业级 |
| TinyMCE | ✅ 完全支持 | 云端和自托管 |
| Toast UI | ✅ 完全支持 | 韩国编辑器 |
| WangEditor | ✅ 完全支持 | 中国编辑器 |
| ProseMirror | 🔄 通过钩子 | 底层实现 |
| Lexical | 🔄 通过钩子 | Facebook 编辑器 |

## 快速开始

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

### 连接编辑器

```ts
import { EditorSwitchboard } from "@coding01/docsjs-editor";

const switchboard = new EditorSwitchboard();
const adapter = switchboard.connect("tiptap", tiptapEditor);

// 注入 DocsJS HTML 快照
await switchboard.setHtml("<h1>你好</h1><p>世界</p>");
```

### 运行时切换

```ts
// 运行时切换到 Quill
await switchboard.switchTo("quill", quillEditor);
```

## 生态

<div class="feature-grid">
  <div class="feature-card">
    <h3>📄 DocsJS</h3>
    <p>高保真 Word/DOCX 导入。用作 HTML 快照来源。</p>
    <a href="https://docsjs.coding01.cn">查看文档 →</a>
  </div>
  <div class="feature-card">
    <h3>📝 DocsJS Markdown</h3>
    <p>将 DocsJS HTML 转换为 Markdown。适用于知识库。</p>
    <a href="https://markdown.docsjs.coding01.cn">查看文档 →</a>
  </div>
</div>

## 技术栈

<div class="stats-bar" style="opacity: 0.7; font-size: 14px;">
  <span>React</span>
  <span>Vue</span>
  <span>TypeScript</span>
  <span>Vite+</span>
</div>
