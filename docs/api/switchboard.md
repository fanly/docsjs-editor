# EditorSwitchboard

## Constructor

```ts
new EditorSwitchboard(options?: SwitchboardOptions)
```

## Methods

### connect(type, instance, options?)

Connect to an editor.

```ts
const adapter = switchboard.connect("tiptap", editorInstance);
```

### switchTo(type, instance, options?)

Switch to a different editor while preserving content.

```ts
await switchboard.switchTo("quill", quillEditor);
```

### setHtml(html)

Set HTML content to the current editor.

```ts
await switchboard.setHtml("<h1>Hello</h1>");
```

### getHtml()

Get HTML content from the current editor.

```ts
const html = switchboard.getHtml();
```

### disconnect()

Disconnect current editor.

```ts
switchboard.disconnect();
```

## Options

```ts
interface SwitchboardOptions {
  defaultAdapter?: string;
  autoSync?: boolean;
}
```
