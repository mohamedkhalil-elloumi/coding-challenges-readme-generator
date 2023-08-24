export function generateParentheses(n: number): Array<string> {
  const result: Array<string> = [];

  function generate(str: string, open: number, close: number) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    if (open < n) {
      generate(str + "(", open + 1, close);
    }
    if (close < open) {
      generate(str + ")", open, close + 1);
    }
  }
  generate("", 0, 0);
  
  return result;
}
