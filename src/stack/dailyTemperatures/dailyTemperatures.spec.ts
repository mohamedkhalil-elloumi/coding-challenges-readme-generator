import { describe, it, expect } from "vitest";

import { dailyTemperatures } from "./dailyTemperatures";

describe("dailyTemperatures", () => {
  it("should return the correct result", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });

  it("should return the correct result", () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });

  it("should return the correct result", () => {
    expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
  });
});
