import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function mockAdapter(name) {
  let html = "";
  return {
    type: name,
    setHtml(value) {
      html = value;
    },
    getHtml() {
      return html;
    }
  };
}

async function run() {
  if (typeof globalThis.HTMLElement === "undefined") {
    globalThis.HTMLElement = class {};
  }

  if (typeof globalThis.customElements === "undefined") {
    globalThis.customElements = {
      define() {},
      get() {
        return undefined;
      }
    };
  }

  const { EditorSwitchboard, buildCompatibilityReport, applyFallbackPolicy, driftScore } = await import(
    "../dist/index.js"
  );

  const sample = "<h1>Release Plan</h1><p>docsjs snapshot.</p><ul><li>Import</li><li>Switch</li><li>Deliver</li></ul><table><tr><td>A</td></tr></table>";

  const board = new EditorSwitchboard();
  const quill = {
    clipboard: {
      dangerouslyPasteHTML(value) {
        quill.__html = value;
      }
    },
    root: {
      get innerHTML() {
        return quill.__html || "";
      }
    },
    __html: ""
  };

  const ck = {
    __html: "",
    setData(value) {
      ck.__html = value;
    },
    getData() {
      return ck.__html;
    }
  };

  const tiny = {
    __html: "",
    setContent(value) {
      tiny.__html = value;
    },
    getContent() {
      return tiny.__html;
    }
  };

  const lexical = mockAdapter("lexical");

  const report = buildCompatibilityReport(sample, "quill");
  const safe = applyFallbackPolicy(sample, report);

  board.connect("quill", quill);

  const t0 = performance.now();
  await board.setHtml(safe);
  const t1 = performance.now();

  const switchStart = performance.now();
  await board.switchTo("ckeditor5", ck);
  await board.switchTo("tinymce", tiny);
  await board.switchTo("lexical", lexical);
  const switchEnd = performance.now();

  const output = await board.getHtml();

  const result = {
    importMs: Number((t1 - t0).toFixed(2)),
    switchMs: Number((switchEnd - switchStart).toFixed(2)),
    compatibilityScore: report.score,
    unsupportedBlocks: report.unsupported,
    driftScore: driftScore(sample, output),
    generatedAt: new Date().toISOString()
  };

  const outDir = resolve(process.cwd(), "artifacts");
  mkdirSync(outDir, { recursive: true });
  const outFile = resolve(outDir, "benchmark-switchboard.json");
  writeFileSync(outFile, `${JSON.stringify({ ...result, outputFile: outFile }, null, 2)}\n`, "utf8");

  console.log("docsjs-editor switchboard benchmark");
  console.log(JSON.stringify({ ...result, outputFile: outFile }, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
