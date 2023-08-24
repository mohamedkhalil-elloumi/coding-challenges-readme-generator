import { describe, it, expect } from "vitest";

import { evalRPN } from "./evalRPN";
//evalRPN is reverse polish notation
describe("evalRPN", () => {
  it("should evaluate the reverse polish notation to 9", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  });

  it("should evaluate the reverse polish notation to 6", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  });

  it("should evaluate the reverse polish notation to 22", () => {
    expect(
      evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ])
    ).toBe(22);
  });
});
