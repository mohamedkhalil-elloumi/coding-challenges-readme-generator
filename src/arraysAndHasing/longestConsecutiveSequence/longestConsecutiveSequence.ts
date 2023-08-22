export function longestConsecutiveSequence(input: Array<number>) {
  const set = new Set<number>(input);
  if (input.length === 0) {
    return 1;
  }
  let max = 1;

  for (const element of input) {
    if (!set.has(element - 1)) {
      let currentElement = element;
      let countSequence = 0;
      while (set.has(currentElement++)) {
        countSequence++;
        max = Math.max(countSequence, max);
      }
    }
  }
  return max;
}
