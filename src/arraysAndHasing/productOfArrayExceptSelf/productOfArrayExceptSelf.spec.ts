import { describe, expect, it } from "vitest";

import { productOfArrayExceptSelf } from "./productOfArrayExceptSelf";

describe("productOfArrayExceptSelf", () => {
  it("should return [24,12,8,6]", () => {
    expect(productOfArrayExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("should return [0,0,9,0,0]", () => {
    expect(productOfArrayExceptSelf([-1, 1, 0, -3, 3])).toEqual([
      0, 0, 9, 0, 0,
    ]);
  });
});
