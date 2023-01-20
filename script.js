export function capitalize(string) {
  const firstToUpper = string.substring(0, 1).toUpperCase();
  return firstToUpper + string.substring(1);
}
