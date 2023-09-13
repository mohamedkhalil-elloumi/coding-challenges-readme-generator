import { describe, it, expect } from "vitest";

import { minEatingSpeed } from "./minEatingSpeed";

describe("minEatingSpeed", () => {
  it("should return 4", () => {
    const piles = [3, 6, 7, 11];
    const h = 8;

    expect(minEatingSpeed(piles, h)).toBe(4);
  });

  it("should return 30", () => {
    const piles = [30, 11, 23, 4, 20];
    const h = 5;

    expect(minEatingSpeed(piles, h)).toBe(30);
  });

  it("should return 23", () => {
    const piles = [30, 11, 23, 4, 20];
    const h = 6;

    expect(minEatingSpeed(piles, h)).toBe(23);
  });
});
