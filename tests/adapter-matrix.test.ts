import { describe, expect, it } from "vitest";
import { BUILTIN_EDITOR_TYPES, createBuiltinAdapter } from "../src/adapters/builtin";

describe("builtin adapter matrix", () => {
  it("exposes mainstream editor type list", () => {
    expect(BUILTIN_EDITOR_TYPES).toEqual([
      "tiptap",
      "quill",
      "ckeditor5",
      "tinymce",
      "toast-ui",
      "wangeditor",
      "prosemirror",
      "lexical",
      "slate"
    ]);
  });

  it("adapts all built-in types for set/get roundtrip", async () => {
    let tiptapHtml = "";
    const tiptap = {
      commands: {
        setContent: (value: string) => {
          tiptapHtml = value;
        }
      },
      getHTML: () => tiptapHtml,
      chain: () => ({ focus: () => ({ run: () => undefined }) })
    };

    let quillHtml = "";
    const quill = {
      clipboard: {
        dangerouslyPasteHTML: (value: string) => {
          quillHtml = value;
        }
      },
      root: {
        get innerHTML() {
          return quillHtml;
        }
      }
    };

    let ckHtml = "";
    const ckeditor5 = {
      setData: (value: string) => {
        ckHtml = value;
      },
      getData: () => ckHtml
    };

    let tinyHtml = "";
    const tinymce = {
      setContent: (value: string) => {
        tinyHtml = value;
      },
      getContent: () => tinyHtml
    };

    let toastHtml = "";
    const toastui = {
      setHTML: (value: string) => {
        toastHtml = value;
      },
      getHTML: () => toastHtml
    };

    let wangHtml = "";
    const wangeditor = {
      setHtml: (value: string) => {
        wangHtml = value;
      },
      getHtml: () => wangHtml
    };

    let proseHtml = "";
    const prosemirror = {
      setHtml: (value: string) => {
        proseHtml = value;
      },
      getHtml: () => proseHtml
    };

    let lexicalHtml = "";
    const lexical = {
      setHtml: (value: string) => {
        lexicalHtml = value;
      },
      getHtml: () => lexicalHtml
    };

    let slateHtml = "";
    const slate = {
      setHtml: (value: string) => {
        slateHtml = value;
      },
      getHtml: () => slateHtml
    };

    const cases: Array<{ type: string; instance: Record<string, unknown> }> = [
      { type: "tiptap", instance: tiptap as unknown as Record<string, unknown> },
      { type: "quill", instance: quill as unknown as Record<string, unknown> },
      { type: "ckeditor5", instance: ckeditor5 as unknown as Record<string, unknown> },
      { type: "tinymce", instance: tinymce as unknown as Record<string, unknown> },
      { type: "toast-ui", instance: toastui as unknown as Record<string, unknown> },
      { type: "wangeditor", instance: wangeditor as unknown as Record<string, unknown> },
      { type: "prosemirror", instance: prosemirror as unknown as Record<string, unknown> },
      { type: "lexical", instance: lexical as unknown as Record<string, unknown> },
      { type: "slate", instance: slate as unknown as Record<string, unknown> }
    ];

    for (const item of cases) {
      const adapter = createBuiltinAdapter({ type: item.type, instance: item.instance });
      const value = `<p>${item.type}</p>`;
      await adapter.setHtml(value);
      expect(await adapter.getHtml()).toBe(value);
    }
  });
});
