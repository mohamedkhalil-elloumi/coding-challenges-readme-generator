export function containsDuplicate(input: Array<number>) {
  const uniqueElements = new Set(input);
  return input.length !== Array.from(uniqueElements).length;
}
