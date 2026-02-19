import { describe, expect, it } from "vitest";
import { driftScore, normalizeText } from "../src/core/benchmark";

describe("benchmark utils", () => {
  it("normalizes html text", () => {
    expect(normalizeText("<h1> Hello </h1><p>World</p>")).toBe("hello world");
  });

  it("calculates drift score", () => {
    const low = driftScore("<p>a b c</p>", "<p>a b c</p>");
    const high = driftScore("<p>a b c</p>", "<p>x y z</p>");

    expect(low).toBe(0);
    expect(high).toBeGreaterThan(low);
  });
});
