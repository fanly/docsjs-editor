# EditorSwitchboard

## 构造函数

```ts
new EditorSwitchboard(options?: SwitchboardOptions)
```

## 方法

### connect(type, instance, options?)

连接编辑器。

```ts
const adapter = switchboard.connect("tiptap", editorInstance);
```

### switchTo(type, instance, options?)

切换到不同编辑器，同时保留内容。

```ts
await switchboard.switchTo("quill", quillEditor);
```

### setHtml(html)

设置 HTML 内容到当前编辑器。

```ts
await switchboard.setHtml("<h1>你好</h1>");
```

### getHtml()

获取当前编辑器的 HTML 内容。

```ts
const html = switchboard.getHtml();
```

### disconnect()

断开当前编辑器。

```ts
switchboard.disconnect();
```

## 选项

```ts
interface SwitchboardOptions {
  defaultAdapter?: string;
  autoSync?: boolean;
}
```
