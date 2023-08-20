import { describe, expect, it } from "vitest";

import { groupAnagrams } from "./groupAnagrams";

describe("groupAnagrams", () => {
  it('Should return [[""]]', () => {
    const input = [""];
    const output = [[""]];
    expect(groupAnagrams(input)).toEqual(output);
  });

  it('Should return [["a"]]', () => {
    const input = ["a"];
    const output = [["a"]];
    expect(groupAnagrams(input)).toEqual(output);
  });

  it("should group anagrams", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(groupAnagrams(input)).toEqual(output);
  });
});
