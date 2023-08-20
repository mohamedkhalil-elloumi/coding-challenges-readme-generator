export function isAnagram(s: string, t: string) {
  return (
    JSON.stringify(s.split("").sort()) === JSON.stringify(t.split("").sort())
  );
}
