import { describe, it, expect } from "vitest";

import { largestRectangleInHistogram } from "./largestRectangleInHistogram";

describe("largestRectangleInHistogram", () => {
  it("Should return 10", () => {
    const input = [2, 1, 5, 6, 2, 3];

    expect(largestRectangleInHistogram(input)).toEqual(10);
  });
  it("Should return 4", () => {
    const input = [2, 4];

    expect(largestRectangleInHistogram(input)).toEqual(4);
  });
});
