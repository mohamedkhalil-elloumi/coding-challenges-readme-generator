import { describe, it, expect } from "vitest";

import { threeSum } from "./threeSum";

describe("threeSum", () => {
  it("[-1,0,1,2,-1,-4]", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it("[]", () => {
    expect(threeSum([])).toEqual([]);
  });

  it("[0]", () => {
    expect(threeSum([0])).toEqual([]);
  });
});
