import { parseDocxToHtmlSnapshot } from "@coding01/docsjs";
import type { DocsjsImportOptions, EditorAdapter } from "./types";

interface DocsjsChangeDetail {
  htmlSnapshot?: string;
}

interface DocsjsHost {
  addEventListener(name: "docsjs-change", handler: (event: Event) => void): void;
  removeEventListener(name: "docsjs-change", handler: (event: Event) => void): void;
}

export async function importHtmlSnapshotToEditor(
  htmlSnapshot: string,
  adapter: EditorAdapter
): Promise<void> {
  await adapter.setHtml(htmlSnapshot);
}

export async function importDocxToEditor(
  file: File,
  adapter: EditorAdapter,
  options: DocsjsImportOptions = {}
): Promise<string> {
  void options;
  const result = await parseDocxToHtmlSnapshot(file);
  const payload = result as string | { htmlSnapshot?: string };
  const html = typeof payload === "string" ? payload : payload.htmlSnapshot ?? "";
  await adapter.setHtml(html);
  return html;
}

export function bindDocsjsChangeToEditor(host: DocsjsHost, adapter: EditorAdapter): () => void {
  const handler = async (event: Event): Promise<void> => {
    const custom = event as CustomEvent<DocsjsChangeDetail>;
    const html = custom.detail?.htmlSnapshot;
    if (!html) return;
    await adapter.setHtml(html);
  };

  host.addEventListener("docsjs-change", handler);
  return () => host.removeEventListener("docsjs-change", handler);
}
