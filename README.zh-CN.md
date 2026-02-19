# @coding01/docsjs-editor

面向 docsjs 生态的多编辑器集成桥接包。
将 docsjs 的 HTML 快照（或通过 docsjs 解析的 DOCX）接入主流编辑器，并支持运行时切换编辑器。

[![npm version](https://img.shields.io/npm/v/@coding01/docsjs-editor)](https://www.npmjs.com/package/@coding01/docsjs-editor)
[![npm downloads](https://img.shields.io/npm/dm/@coding01/docsjs-editor)](https://www.npmjs.com/package/@coding01/docsjs-editor)
[![License](https://img.shields.io/npm/l/@coding01/docsjs-editor)](./LICENSE)

---

[English README](./README.md)

## 能力概览

- 主流编辑器统一适配 API
- 运行时可切换编辑器并保留内容
- docsjs 事件桥接（`docsjs-change -> editor.setHtml`）
- 通过 docsjs 解析 DOCX 并注入编辑器

当前支持的适配器类型：

- `tiptap`
- `quill`
- `ckeditor5`
- `tinymce`
- `toast-ui`
- `wangeditor`
- `prosemirror`（通过宿主 hooks）
- `lexical`（通过宿主 hooks）
- `slate`（通过宿主 hooks）

## 重点推荐：@coding01/docsjs

推荐与 `@coding01/docsjs` 配套使用：先由 docsjs 高保真导入 Word/DOCX，再把 HTML 快照交给 `@coding01/docsjs-editor` 对接具体编辑器。

- npm: https://www.npmjs.com/package/@coding01/docsjs
- GitHub: https://github.com/fanly/docsjs
- 产品页: https://docsjs.coding01.cn/

## 安装

```bash
npm i @coding01/docsjs-editor
```

## 快速开始

```ts
import { EditorSwitchboard, bindDocsjsChangeToEditor } from "@coding01/docsjs-editor";

const switchboard = new EditorSwitchboard();
const adapter = switchboard.connect("tiptap", tiptapEditor as unknown as Record<string, unknown>);

await switchboard.setHtml("<h1>Hello</h1><p>docsjs snapshot</p>");

const unbind = bindDocsjsChangeToEditor(docsjsElement, adapter);

await switchboard.switchTo("quill", quillEditor as unknown as Record<string, unknown>);

unbind();
```

## API

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

## Demo

- 多编辑器运行时切换示例：`demos/multi-switch.html`
- Tiptap + Quill 切换示例：`demos/tiptap-switch.html`
- Demo 说明：`demos/README.md`

## 集成文档

- 能力矩阵：`docs/EDITOR_CAPABILITY_MATRIX.md`
- 集成指南：`docs/INTEGRATION_GUIDE.md`
- 路线图：`docs/EDITOR_INTEGRATION_ROADMAP.md`

## 单页模板规范

为了与 docsjs 生态保持一致，插件单页采用统一架构模板：

- 规范文件：`docs/LANDING_TEMPLATE.md`
- 实际页面：`docs/index.html`

## 开发

```bash
npm install
npm run verify
npm run build
npm run benchmark:switchboard
```

## 发布规则

### 手动发布

```bash
npm version patch
git push origin main --follow-tags
npm publish --access public
```

### 建议 CI 规则（与 docsjs/docsjs-markdown 一致）

- 触发条件：tag `v*.*.*`
- 质量门：`npm run verify`
- 发包：`npm publish --access public`

### GitHub Packages

- 工作流：`.github/workflows/publish-github-packages.yml`
- 触发条件：tag `v*.*.*` 或手动触发
- 目标仓库：`https://npm.pkg.github.com`
- GitHub Packages 包名：`@fanly/docsjs-editor`

## License

MIT
