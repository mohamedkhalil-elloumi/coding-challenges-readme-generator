import { describe, it, expect } from "vitest";

import { MinStack } from "./MinStack";

describe("MinStack", () => {
  it("should return the minimum value in the stack", () => {
    const stack = new MinStack();

    stack.push(-2);
    stack.push(0);
    stack.push(-3);

    expect(stack.getMin()).toBe(-3);

    stack.pop();

    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });
});
