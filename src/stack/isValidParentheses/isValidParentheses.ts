export const isValidParentheses = (input: string): boolean => {
  const stack: Array<string> = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (
        (char === ")" && last !== "(") ||
        (char === "]" && last !== "[") ||
        (char === "}" && last !== "{")
      ) {
        return false;
      }
    }
  }
  return !stack.length;
};
