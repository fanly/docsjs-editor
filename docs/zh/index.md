---
layout: home

hero:
  name: DocsJS Editor
  text: 主流编辑器的统一桥接
  tagline: 在主流编辑器间运行统一的 docsjs 内容流，运行时切换提供商，保持业务 API 不变。
  image:
    src: /logo.svg
    alt: DocsJS Editor Logo
  actions:
    - theme: brand
      text: 获取包
      link: https://www.npmjs.com/package/@coding01/docsjs-editor
    - theme: brand
      text: 配合 docsjs 使用
      link: https://docsjs.coding01.cn
    - theme: alt
      text: 查看案例
      link: #showcase

features:
  - title: 主流覆盖
    details: 内置适配器优先覆盖主流编辑器，为 Lexical、Slate 和 ProseMirror 栈提供可扩展钩子。
  - title: 运行时切换
    details: 运行时切换编辑器提供商，同时保留内容并避免集成重写。
  - title: docsjs 原生桥接
    details: 将 docsjs 快照直接连接到目标编辑器，使导入和编辑保持在一条技术路径上。
  - title: 生态配对
    details: 与 docsjs 配对作为规范源，在多个编辑器提供商间保持一个内容流一致。
---

<div class="stats-bar">
  <div class="stat-item">
    <div class="stat-value">9</div>
    <div class="stat-label">主流编辑器</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">1</div>
    <div class="stat-label">业务 API</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">运行时</div>
    <div class="stat-label">提供商切换</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">MIT</div>
    <div class="stat-label">开源</div>
  </div>
</div>

## 为什么选择 docsjs-editor？

- **主流覆盖**：内置适配器优先覆盖主流编辑器，为 Lexical、Slate 和 ProseMirror 栈提供可扩展钩子。
- **运行时切换**：运行时切换编辑器提供商，同时保留内容并避免集成重写。
- **docsjs 原生桥接**：将 docsjs 快照直接连接到目标编辑器，使导入和编辑保持在一条技术路径上。
- **生态配对**：与 docsjs 配对作为规范源，在多个编辑器提供商间保持一个内容流一致。

## 框架快速开始

- **React**：运行时切换演示，一个 docsjs 内容源和两个编辑器提供商。[打开 React 演示](https://github.com/fanly/docsjs-editor/blob/main/demos/react-demo/index.html)
- **Vue**：Vue 状态驱动的提供商切换，保持一致的内容行为。[打开 Vue 演示](https://github.com/fanly/docsjs-editor/blob/main/demos/vue-demo/index.html)
- **原生 / CDN**：5 编辑器面板，在提交技术栈之前基准测试集成工作量。[打开 5 编辑器演示](https://github.com/fanly/docsjs-editor/blob/main/demos/multi-switch.html)

## 完整案例

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
```

## API 参考

- **切换板**：connect() / switchTo() / setHtml() / getHtml()
- **docsjs 桥接**：bindDocsjsChangeToEditor() / importDocxToEditor()
- **适配器**：createBuiltinAdapter() 支持主流编辑器类型

## 推荐生态路径

使用 docsjs 进行高保真导入，docsjs-editor 进行运行时编辑器切换，docsjs-markdown 进行最终 Markdown 交付。

**@coding01/docsjs** → **@coding01/docsjs-editor** → **@coding01/docsjs-markdown**

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

## 生态系统

| 包                                                          | 描述                  |
| ----------------------------------------------------------- | --------------------- |
| [DocsJS](https://docsjs.coding01.cn)                        | 高保真 Word/DOCX 导入 |
| [DocsJS Markdown](https://fanly.github.io/docsjs-markdown/) | Markdown 输出转换     |
