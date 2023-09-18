import { describe, it, expect } from "vitest";

import { maxProfit } from "./maxProfit";

describe("maxProfit", () => {
  it("should return 5", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("should return 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("should return 0", () => {
    expect(maxProfit([1])).toBe(0);
  });

  it("should return 0", () => {
    expect(maxProfit([])).toBe(0);
  });

  it("should return 0", () => {
    expect(maxProfit([1, 2])).toBe(1);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1])).toBe(0);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1, 2, 0, 1])).toBe(1);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1])).toBe(1);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toBe(2);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2, 1])).toBe(2);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2, 1, 0])).toBe(2);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2, 1, 0, 1])).toBe(2);
  });

  it("should return 0", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2, 1, 0, 1])).toBe(2);
  });
});
