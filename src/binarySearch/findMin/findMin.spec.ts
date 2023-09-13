import { describe, it, expect } from "vitest";

import { findMin } from "./findMin";

describe("findMin", () => {
  it("Should return 1", () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  });

  it("Should return 0", () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });

  it("Should return 11", () => {
    expect(findMin([11, 13, 15, 17])).toBe(11);
  });
});
