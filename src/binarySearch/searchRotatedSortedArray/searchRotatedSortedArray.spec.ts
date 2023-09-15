import { it, describe, expect } from "vitest";

import { searchRotatedSortedArray } from "./searchRotatedSortedArray";

describe("searchRotatedSortedArray", () => {
  it("should return 4", () => {
    expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it("should return -1", () => {
    expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it("should return -1", () => {
    expect(searchRotatedSortedArray([1], 0)).toBe(-1);
  });
});
