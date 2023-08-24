import { describe, it, expect } from "vitest";

import { isValidParentheses } from "./isValidParentheses";

describe("isValidParentheses", () => {
  it("should return true for valid parentheses", () => {
    expect(isValidParentheses("()")).toBe(true);
    expect(isValidParentheses("()[]{}")).toBe(true);
    expect(isValidParentheses("{[]}")).toBe(true);
  });

  it("should return false for invalid parentheses", () => {
    expect(isValidParentheses("(]")).toBe(false);
    expect(isValidParentheses("([)]")).toBe(false);
  });
});
