import { describe, expect, it } from "vitest";
import { applyFallbackPolicy, buildCompatibilityReport } from "../src/core/report";

describe("compatibility report", () => {
  it("builds unsupported block report and score", () => {
    const html = "<h1>x</h1><table><tr><td>a</td></tr></table><iframe src='x'></iframe><math><mi>x</mi></math>";
    const report = buildCompatibilityReport(html, "quill");

    expect(report.editor).toBe("quill");
    expect(report.score).toBeLessThan(100);
    expect(report.unsupported.map((x) => x.tag)).toContain("table");
    expect(report.unsupported.map((x) => x.tag)).toContain("iframe");
    expect(report.unsupported.map((x) => x.tag)).toContain("math");
  });

  it("applies fallback policy transformations", () => {
    const html = "<p>a</p><table><tr><td>b</td></tr></table><iframe src='x'></iframe><math>x</math>";
    const report = buildCompatibilityReport(html, "quill");
    const out = applyFallbackPolicy(html, report);

    expect(out).toContain("[table omitted for editor compatibility]");
    expect(out).not.toContain("<iframe");
    expect(out).toContain("[math content omitted for editor compatibility]");
  });
});
