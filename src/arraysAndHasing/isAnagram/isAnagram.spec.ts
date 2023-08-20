import { describe, it, expect } from "vitest";

import { isAnagram } from "./isAnagram";

describe("isAnagram", () => {
  it("Should return true", () => {
    const input1 = "anagram";
    const input2 = "nagaram";

    expect(isAnagram(input1, input2)).toBe(true);
  });
  it("Should return false", () => {
    const input1 = "rat";
    const input2 = "car";

    expect(isAnagram(input1, input2)).toBe(false);
  });
});
