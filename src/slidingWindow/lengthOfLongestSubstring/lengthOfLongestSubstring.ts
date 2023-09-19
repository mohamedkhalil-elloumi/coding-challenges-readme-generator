export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let substring = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = substring.indexOf(char);

    if (index === -1) {
      substring += char;
      max = Math.max(max, substring.length);
    } else {
      substring = substring.slice(index + 1) + char;
    }
  }
  return max;
}
