import { describe, it, expect } from "vitest";

import { search } from "./search";

describe("search", () => {
  it("should return the index of the target", () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const target = 9;

    expect(search(input, target)).toBe(4);
  });

  it("should return -1 if the target is not in the array", () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const target = 2;

    expect(search(input, target)).toBe(-1);
  });
});
