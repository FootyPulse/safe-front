export function getFirstAndLastChar(s: string): [string, string] {
  if (s.length === 0) {
    return ["", ""]; // Handle empty string
  }

  const first = s[0];
  const last = s[s.length - 1];
  return [first, last];
}
