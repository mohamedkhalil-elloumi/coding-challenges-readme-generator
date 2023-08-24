import { describe, it, expect } from "vitest";

import { generateParentheses } from "./generateParentheses";

describe("generateParenthesis", () => {
  it("should generate all combinations of well-formed parentheses", () => {
    expect(generateParentheses(3)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });

  it("should generate all combinations of well-formed parentheses", () => {
    expect(generateParentheses(1)).toEqual(["()"]);
  });

  it("should generate all combinations of well-formed parentheses", () => {
    expect(generateParentheses(2)).toEqual(["(())", "()()"]);
  });
});
