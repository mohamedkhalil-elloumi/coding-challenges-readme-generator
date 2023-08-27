export function threeSum(numbers: Array<number>) {
  numbers.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;
    let j = i + 1;
    let k = numbers.length - 1;

    while (j < k) {
      let sum = numbers[i] + numbers[j] + numbers[k];

      if (sum === 0) {
        result.push([numbers[i], numbers[j], numbers[k]]);
        while (j < k && numbers[j] === numbers[j + 1]) j++;
        while (j < k && numbers[k] === numbers[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }
  return result;
}
