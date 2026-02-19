# docsjs-editor demos

## Purpose

These demos show runtime switching between mainstream editors with a unified docsjs-editor switchboard.

## Available demos

- `demos/multi-switch.html`: Tiptap + Quill + CKEditor5 + TinyMCE + Toast UI in one page
- `demos/tiptap-switch.html`: Tiptap + Quill runtime switch

## Run locally

1. Build package output:

```bash
npm run build
```

2. Start a static server from repo root:

```bash
npx serve .
```

3. Open:

- `http://localhost:3000/demos/multi-switch.html`
- `http://localhost:3000/demos/tiptap-switch.html`

## Notes

- The demo imports local package build from `../dist/index.js`.
- CDN scripts are used for editor runtimes.
