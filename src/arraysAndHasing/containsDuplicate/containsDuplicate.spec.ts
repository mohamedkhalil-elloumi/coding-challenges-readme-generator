import { describe, it, expect } from "vitest";

import { containsDuplicate } from "./containsDuplicate";

describe("containsDuplicate", () => {
  it("Should return true", () => {
    const input = [1, 2, 3, 1];
    expect(containsDuplicate(input)).toBe(true);
  });
  it("Should return false", () => {
    const input = [1, 2, 3, 4];
    expect(containsDuplicate(input)).toBe(false);
  });
  it("Should return true", () => {
    const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(input)).toBe(true);
  });
});
