export function groupAnagrams(input: Array<string>): Array<Array<string>> {
  const stringMaps = new Map<string, Array<string>>();

  for (let i = 0; i < input.length; i++) {
    const current = input[i].split("").sort().join("");
    const mapValue = stringMaps.get(current);
    if (mapValue) {
      const newStrings = [...mapValue, input[i]];
      stringMaps.set(current, newStrings);
      continue;
    }
    stringMaps.set(current, [input[i]]);
  }

  return [...stringMaps.values()];
}
