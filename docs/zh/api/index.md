# API 参考

## 主要导出

- `EditorSwitchboard` - 管理编辑器连接的主类
- `createBuiltinAdapter` - 为内置编辑器创建适配器
- `bindDocsjsChangeToEditor` - 绑定 DocsJS 更改事件到编辑器
- `importHtmlSnapshotToEditor` - 导入 HTML 到编辑器

## 浏览器安全入口

```ts
// 无 DocsJS 解析器依赖
import { EditorSwitchboard } from "@coding01/docsjs-editor/browser";
```

## 相关链接

- [EditorSwitchboard](./switchboard)
- [适配器](./adapters)
