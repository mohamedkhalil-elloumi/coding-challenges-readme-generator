export function twoSum(input: Array<number>, target: number) {
  const inputMap = new Map();

  for (let i = 0; i < input.length; i++) {
    const difference = target - input[i];
    if (inputMap.has(difference)) return [inputMap.get(difference), i];
    inputMap.set(input[i], i);
  }
}
