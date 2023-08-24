export function evalRPN(tokens: Array<string>) {
  const stack: Array<number> = [];
  const operands = ["*", "+", "/", "-"];

  for (let i = 0; i < tokens.length; i++) {
    if (!operands.includes(tokens[i])) {
      stack.push(parseInt(tokens[i]));
      continue;
    }

    const x = stack.pop();
    const y = stack.pop();
    if (x === undefined || y === undefined) throw new Error("Invalid input");

    if (tokens[i] === "+") {
      stack.push(y + x);
    } else if (tokens[i] === "-") {
      stack.push(y - x);
    } else if (tokens[i] === "*") {
      stack.push(y * x);
    } else if (tokens[i] === "/") {
      stack.push(Math.trunc(y / x));
    }
  }
  return stack.pop();
}
