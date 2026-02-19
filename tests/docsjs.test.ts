import { describe, expect, it, vi } from "vitest";

vi.mock("@coding01/docsjs", () => ({
  parseDocxToHtmlSnapshot: vi.fn(async () => ({ htmlSnapshot: "<h1>from-docx</h1>" }))
}));

import { bindDocsjsChangeToEditor, importDocxToEditor, importHtmlSnapshotToEditor } from "../src/docsjs";

describe("docsjs bridge", () => {
  it("imports html snapshot into adapter", async () => {
    let html = "";
    const adapter = {
      type: "test",
      setHtml: async (value: string) => {
        html = value;
      },
      getHtml: async () => html
    };

    await importHtmlSnapshotToEditor("<p>snapshot</p>", adapter);
    expect(await adapter.getHtml()).toBe("<p>snapshot</p>");
  });

  it("imports docx through docsjs parser", async () => {
    let html = "";
    const adapter = {
      type: "test",
      setHtml: async (value: string) => {
        html = value;
      },
      getHtml: async () => html
    };

    const file = new File(["demo"], "demo.docx");
    const out = await importDocxToEditor(file, adapter);

    expect(out).toBe("<h1>from-docx</h1>");
    expect(await adapter.getHtml()).toBe("<h1>from-docx</h1>");
  });

  it("binds docsjs-change event to adapter", async () => {
    let html = "";
    const adapter = {
      type: "test",
      setHtml: async (value: string) => {
        html = value;
      },
      getHtml: async () => html
    };

    const listeners = new Map<string, (event: Event) => void>();
    const host = {
      addEventListener: (name: "docsjs-change", handler: (event: Event) => void) => {
        listeners.set(name, handler);
      },
      removeEventListener: (name: "docsjs-change") => {
        listeners.delete(name);
      }
    };

    const unbind = bindDocsjsChangeToEditor(host, adapter);
    const event = new CustomEvent("docsjs-change", { detail: { htmlSnapshot: "<p>changed</p>" } });
    await listeners.get("docsjs-change")?.(event);

    expect(await adapter.getHtml()).toBe("<p>changed</p>");

    unbind();
    expect(listeners.has("docsjs-change")).toBe(false);
  });
});
