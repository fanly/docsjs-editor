export interface BenchmarkResult {
  importMs: number;
  switchMs: number;
  compatibilityScore: number;
  unsupportedBlocks: Array<{ tag: string; count: number; reason: string; action: string }>;
  driftScore: number;
  generatedAt: string;
  outputFile: string;
}

export function normalizeText(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}

export function driftScore(sourceHtml: string, outputHtml: string): number {
  const aa = normalizeText(sourceHtml);
  const bb = normalizeText(outputHtml);
  if (!aa && !bb) return 0;

  const ta = new Set(aa.split(" ").filter(Boolean));
  const tb = new Set(bb.split(" ").filter(Boolean));
  const union = new Set([...ta, ...tb]);
  let intersection = 0;

  for (const token of ta) {
    if (tb.has(token)) intersection += 1;
  }

  const similarity = union.size === 0 ? 1 : intersection / union.size;
  return Number((1 - similarity).toFixed(4));
}
