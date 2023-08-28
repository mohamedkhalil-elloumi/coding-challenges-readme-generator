import { describe, it, expect } from "vitest";

import { maxArea } from "./maxArea";

describe("maxArea", () => {
  it("should return 49", () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = 49;

    expect(maxArea(input)).toEqual(output);
  });

  it("should return 1", () => {
    const input = [1, 1];
    const output = 1;

    expect(maxArea(input)).toEqual(output);
  });

  it("should return 16", () => {
    const input = [4, 3, 2, 1, 4];
    const output = 16;

    expect(maxArea(input)).toEqual(output);
  });

  it("should return 2", () => {
    const input = [1, 2, 1];
    const output = 2;

    expect(maxArea(input)).toEqual(output);
  });
});
