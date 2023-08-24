export function dailyTemperatures(temperatures: Array<number>) {
  const stack: Array<number> = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    while (
      stack.length &&
      temperature > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndexDay = stack.pop();
      if (prevIndexDay !== undefined) result[prevIndexDay] = i - prevIndexDay;
    }
    stack.push(i);
  }

  return result;
}
