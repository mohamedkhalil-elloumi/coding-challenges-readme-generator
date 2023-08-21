export function topKFrequentElements(input: Array<number>, k: number) {
  const frequencyMap = new Map<number, number>();

  for (const element of input) {
    let numberOccurrences = frequencyMap.get(element);

    if (numberOccurrences !== undefined) {
      frequencyMap.set(element, numberOccurrences + 1);
      continue;
    }
    frequencyMap.set(element, 1);
  }

  const sortedArray = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
  const topKElements: Array<number> = sortedArray
    .slice(undefined, k)
    .map(([number, _]) => number);

  return topKElements;
}
