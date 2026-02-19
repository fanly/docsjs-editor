import { describe, expect, it } from "vitest";

describe("package exports", () => {
  it("exposes core API from main entry", async () => {
    if (typeof (globalThis as { HTMLElement?: unknown }).HTMLElement === "undefined") {
      (globalThis as { HTMLElement: unknown }).HTMLElement = class {};
    }

    if (typeof (globalThis as { customElements?: unknown }).customElements === "undefined") {
      (globalThis as { customElements: unknown }).customElements = {
        define() {},
        get() {
          return undefined;
        }
      };
    }

    const coreExports = await import("../src/index");

    expect(typeof coreExports.EditorSwitchboard).toBe("function");
    expect(typeof coreExports.createBuiltinAdapter).toBe("function");
    expect(typeof coreExports.buildCompatibilityReport).toBe("function");
    expect(typeof coreExports.applyFallbackPolicy).toBe("function");
    expect(typeof coreExports.bindDocsjsChangeToEditor).toBe("function");
    expect(typeof coreExports.driftScore).toBe("function");
  });

  it("exposes browser-safe API", async () => {
    const browserExports = await import("../src/browser");

    expect(typeof browserExports.EditorSwitchboard).toBe("function");
    expect(typeof browserExports.createBuiltinAdapter).toBe("function");
    expect(typeof browserExports.buildCompatibilityReport).toBe("function");
    expect(typeof browserExports.applyFallbackPolicy).toBe("function");
    expect(typeof browserExports.driftScore).toBe("function");
    expect("bindDocsjsChangeToEditor" in browserExports).toBe(false);
  });
});
