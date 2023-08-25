import { describe, it, expect } from "vitest";

import { carFleet } from "./carFleet";

describe("carFleet", () => {
  it("carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]) should return 3", () => {
    expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
  });

  it("carFleet(10, [6, 8], [3, 2]) should return 2", () => {
    expect(carFleet(10, [6, 8], [3, 2])).toBe(2);
  });

  it("carFleet(10, [0, 4, 2], [2, 1, 3]) should return 1", () => {
    expect(carFleet(10, [0, 4, 2], [2, 1, 3])).toBe(1);
  });
});
