export function productOfArrayExceptSelf(input: Array<number>) {
  const result: Array<number> = new Array<number>(input.length).fill(1);
  let prefix: number = 1;

  for (let i = 0; i < input.length; i++) {
    result[i] = prefix;
    prefix *= input[i];
  }

  let suffix: number = 1;
  for (let i = 0; i < result.length; i++) {
    result[result.length - 1 - i] *= suffix;
    suffix *= input[input.length - 1 - i];
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = Math.abs(result[i]);
  }
  return result;
}
