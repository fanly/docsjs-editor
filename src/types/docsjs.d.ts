declare module "@coding01/docsjs" {
  export interface DocxParseOptions {
    enablePlugins?: boolean;
    sanitizationProfile?: "fidelity-first" | "strict";
  }

  export interface DocxParseResult {
    htmlSnapshot: string;
  }

  export function parseDocxToHtmlSnapshot(
    file: File,
    options?: DocxParseOptions,
  ): Promise<DocxParseResult | string>;
}
