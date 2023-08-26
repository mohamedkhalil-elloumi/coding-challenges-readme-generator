import { describe, it, expect } from "vitest";

import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  it("Should return true", () => {
    const input = "A man, a plan, a canal: Panama";
    expect(isPalindrome(input)).toEqual(true);
  });

  it("Should return false", () => {
    const input = "race a car";
    expect(isPalindrome(input)).toEqual(false);
  });

  it("Should return true", () => {
    const input = " ";
    expect(isPalindrome(input)).toEqual(true);
  });
});
