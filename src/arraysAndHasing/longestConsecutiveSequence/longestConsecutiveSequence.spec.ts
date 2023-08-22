import { describe, it, expect } from "vitest";

import { longestConsecutiveSequence } from "./longestConsecutiveSequence";

describe("longestConsecutiveSequence", () => {
  it("should return 4", () => {
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it("should return 9", () => {
    expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });
});
