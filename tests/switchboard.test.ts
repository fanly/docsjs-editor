import { describe, expect, it } from "vitest";
import { EditorSwitchboard } from "../src/core/switchboard";

describe("EditorSwitchboard", () => {
  it("connects tiptap and syncs content when switching", async () => {
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

    const board = new EditorSwitchboard();
    board.connect("tiptap", tiptap as unknown as Record<string, unknown>);
    await board.setHtml("<p>A</p>");

    expect(await board.getHtml()).toBe("<p>A</p>");

    await board.switchTo("quill", quill as unknown as Record<string, unknown>);
    expect(await board.getHtml()).toBe("<p>A</p>");
  });

  it("supports generic adapter via fallback hooks", async () => {
    let html = "";
    const board = new EditorSwitchboard();

    board.connect("custom-x", {}, {
      fallbackSetHtml: (value) => {
        html = value;
      },
      fallbackGetHtml: () => html
    });

    await board.setHtml("<h1>ok</h1>");
    expect(await board.getHtml()).toBe("<h1>ok</h1>");
  });
});
