import { describe, it, expect } from "vitest";

import { TimeMap } from "./TimeMap";

describe("TimeMap", () => {
  it('should return ""', () => {
    const timeMap = new TimeMap();
    expect(timeMap.get("foo", 1)).toBe("");
  });

  it("should return bar", () => {
    const timeMap = new TimeMap();
    timeMap.set("foo", "bar", 1);
    expect(timeMap.get("foo", 2)).toBe("bar");
  });

  it("should return bar", () => {
    const timeMap = new TimeMap();
    timeMap.set("foo", "bar", 1);
    expect(timeMap.get("foo", 1)).toBe("bar");
  });

  it("should return bar2", () => {
    const timeMap = new TimeMap();
    timeMap.set("foo", "bar", 1);
    timeMap.set("foo", "bar2", 3);
    expect(timeMap.get("foo", 3)).toBe("bar2");
  });
});
