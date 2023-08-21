import { describe, expect, it } from "vitest";

import { topKFrequentElements } from "./topKFrequentElements";

describe("topKFrequentElements", () => {
  it("should return [1,2]", () => {
    expect(topKFrequentElements([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  it("should return [1]", () => {
    expect(topKFrequentElements([1], 1)).toEqual([1]);
  });
});
