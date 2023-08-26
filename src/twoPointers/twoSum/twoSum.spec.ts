import { describe, it, expect } from "vitest";

import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("Should return [1, 2]", () => {
    const input = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(input, target)).toEqual([1, 2]);
  });

  it("Should return [1, 2]", () => {
    const input = [3, 3];
    const target = 6;

    expect(twoSum(input, target)).toEqual([1, 2]);
  });

  it("Should return [1, 3]", () => {
    const input = [3, 2, 3];
    const target = 6;

    expect(twoSum(input, target)).toEqual([1, 3]);
  });
});
