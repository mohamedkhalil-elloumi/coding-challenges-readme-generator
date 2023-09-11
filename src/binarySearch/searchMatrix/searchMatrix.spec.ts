import { describe, it, expect } from "vitest";

import { searchMatrix } from "./searchMatrix";

describe("searchMatrix", () => {
  it("should return true if target is in matrix", () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    const target = 5;
    expect(searchMatrix(matrix, target)).toEqual(true);
  });

  it("should return false if target is not in matrix", () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    const target = 20;
    expect(searchMatrix(matrix, target)).toEqual(false);
  });
});
