import type { AdapterContext, BuiltinEditorType, CreateAdapterOptions, EditorAdapter } from "../types";

export const BUILTIN_EDITOR_TYPES: BuiltinEditorType[] = [
  "tiptap",
  "quill",
  "ckeditor5",
  "tinymce",
  "toast-ui",
  "wangeditor",
  "prosemirror",
  "lexical",
  "slate"
];

function expectFunction<T>(
  value: unknown,
  label: string
): T {
  if (typeof value !== "function") {
    throw new Error(`[docsjs-editor] Missing function: ${label}`);
  }
  return value as T;
}

function getObject(obj: Record<string, unknown>, key: string): Record<string, unknown> {
  const value = obj[key];
  if (!value || typeof value !== "object") {
    throw new Error(`[docsjs-editor] Missing object: ${key}`);
  }
  return value as Record<string, unknown>;
}

function createGenericAdapter(
  type: BuiltinEditorType | string,
  instance: Record<string, unknown>,
  options: CreateAdapterOptions = {}
): EditorAdapter {
  const setContent = (instance as { setContent?: (value: string) => void }).setContent;
  const getContent = (instance as { getContent?: () => string }).getContent;

  if (setContent && getContent) {
    return {
      type,
      setHtml: (html: string) => setContent(html),
      getHtml: () => getContent()
    };
  }

  if (!options.fallbackSetHtml || !options.fallbackGetHtml) {
    throw new Error(`[docsjs-editor] Unsupported adapter type: ${type}`);
  }

  return {
    type,
    setHtml: (html: string) => options.fallbackSetHtml?.(html),
    getHtml: () => options.fallbackGetHtml?.() ?? ""
  };
}

function createTiptapAdapter(ctx: AdapterContext): EditorAdapter {
  const commands = getObject(ctx.instance, "commands");
  const setContent = expectFunction<(html: string, emitUpdate?: boolean) => void>(
    commands["setContent"],
    "tiptap.commands.setContent"
  );
  const getHTML = expectFunction<() => string>(ctx.instance["getHTML"], "tiptap.getHTML");

  return {
    type: "tiptap",
    setHtml: (html: string) => setContent(html, false),
    getHtml: () => getHTML(),
    focus: () => {
      const chain = (ctx.instance as { chain?: () => { focus: () => { run: () => void } } }).chain;
      chain?.().focus().run();
    }
  };
}

function createQuillAdapter(ctx: AdapterContext): EditorAdapter {
  const clipboard = getObject(ctx.instance, "clipboard");
  const paste = expectFunction<(html: string) => void>(
    clipboard["dangerouslyPasteHTML"],
    "quill.clipboard.dangerouslyPasteHTML"
  );
  const root = getObject(ctx.instance, "root");

  return {
    type: "quill",
    setHtml: (html: string) => paste(html),
    getHtml: () => String(root["innerHTML"] ?? "")
  };
}

function createCKEditor5Adapter(ctx: AdapterContext): EditorAdapter {
  const setData = expectFunction<(html: string) => void>(ctx.instance["setData"], "ckeditor5.setData");
  const getData = expectFunction<() => string>(ctx.instance["getData"], "ckeditor5.getData");

  return {
    type: "ckeditor5",
    setHtml: (html: string) => setData(html),
    getHtml: () => getData()
  };
}

function createTinyMCEAdapter(ctx: AdapterContext): EditorAdapter {
  const setContent = expectFunction<(html: string) => void>(ctx.instance["setContent"], "tinymce.setContent");
  const getContent = expectFunction<() => string>(ctx.instance["getContent"], "tinymce.getContent");

  return {
    type: "tinymce",
    setHtml: (html: string) => setContent(html),
    getHtml: () => getContent()
  };
}

function createToastUiAdapter(ctx: AdapterContext): EditorAdapter {
  const setHTML = expectFunction<(html: string) => void>(ctx.instance["setHTML"], "toast-ui.setHTML");
  const getHTML = expectFunction<() => string>(ctx.instance["getHTML"], "toast-ui.getHTML");

  return {
    type: "toast-ui",
    setHtml: (html: string) => setHTML(html),
    getHtml: () => getHTML()
  };
}

function createWangEditorAdapter(ctx: AdapterContext): EditorAdapter {
  const setHtml = expectFunction<(html: string) => void>(ctx.instance["setHtml"], "wangEditor.setHtml");
  const getHtml = expectFunction<() => string>(ctx.instance["getHtml"], "wangEditor.getHtml");

  return {
    type: "wangeditor",
    setHtml: (html: string) => setHtml(html),
    getHtml: () => getHtml()
  };
}

function createProseMirrorAdapter(ctx: AdapterContext): EditorAdapter {
  const setHtml = expectFunction<(html: string) => void>(ctx.instance["setHtml"], "prosemirror.setHtml");
  const getHtml = expectFunction<() => string>(ctx.instance["getHtml"], "prosemirror.getHtml");

  return {
    type: "prosemirror",
    setHtml,
    getHtml
  };
}

function createLexicalAdapter(ctx: AdapterContext): EditorAdapter {
  const setHtml = expectFunction<(html: string) => void>(ctx.instance["setHtml"], "lexical.setHtml");
  const getHtml = expectFunction<() => string>(ctx.instance["getHtml"], "lexical.getHtml");

  return {
    type: "lexical",
    setHtml,
    getHtml
  };
}

function createSlateAdapter(ctx: AdapterContext): EditorAdapter {
  const setHtml = expectFunction<(html: string) => void>(ctx.instance["setHtml"], "slate.setHtml");
  const getHtml = expectFunction<() => string>(ctx.instance["getHtml"], "slate.getHtml");

  return {
    type: "slate",
    setHtml,
    getHtml
  };
}

export function createBuiltinAdapter(
  ctx: AdapterContext,
  options: CreateAdapterOptions = {}
): EditorAdapter {
  switch (ctx.type) {
    case "tiptap":
      return createTiptapAdapter(ctx);
    case "quill":
      return createQuillAdapter(ctx);
    case "ckeditor5":
      return createCKEditor5Adapter(ctx);
    case "tinymce":
      return createTinyMCEAdapter(ctx);
    case "toast-ui":
      return createToastUiAdapter(ctx);
    case "wangeditor":
      return createWangEditorAdapter(ctx);
    case "prosemirror":
      return createProseMirrorAdapter(ctx);
    case "lexical":
      return createLexicalAdapter(ctx);
    case "slate":
      return createSlateAdapter(ctx);
    default:
      return createGenericAdapter(ctx.type, ctx.instance, options);
  }
}
