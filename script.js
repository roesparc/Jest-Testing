export function capitalize(string) {
  const firstToUpper = string.substring(0, 1).toUpperCase();
  return firstToUpper + string.substring(1);
}

export function reverseString(string) {
  const charArray = string.split("");
  const reversedArray = [];

  for (let i = charArray.length - 1; i >= 0; i--) {
    reversedArray.push(charArray[i]);
  }

  return reversedArray.join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
