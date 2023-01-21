// The capitalize function takes a string and returns it with the first character capitalized.

export const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

// The reverseString function takes a string and returns it reversed.

export const reverseString = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
};

// The calculator object contains functions for the basic operations.

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

// The caesarCipher function takes a string and returns it with each character “shifted”.

const getIndex = (index, shift) => {
  let newIndex = index + shift;

  if (newIndex < 0) {
    newIndex = 26 + newIndex;
  } else if (newIndex > 25) {
    newIndex = newIndex - 26;
  }

  return newIndex;
};

export const caesarCipher = (string, shift) => {
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let shiftedString = "";

  for (let character of string) {
    if (
      alphabetUpper.indexOf(character) === -1 &&
      alphabetLower.indexOf(character) === -1
    ) {
      shiftedString += character;
      continue;
    }

    if (character === character.toUpperCase()) {
      const index = alphabetUpper.indexOf(character);
      shiftedString += alphabetUpper[getIndex(index, shift)];
    } else {
      const index = alphabetLower.indexOf(character);
      shiftedString += alphabetLower[getIndex(index, shift)];
    }
  }

  return shiftedString;
};

// The analyzeArray function takes an array of numbers and returns an object with the following properties: average, min, max, and length.

export const analyzeArray = (array) => {
  let sum = 0;
  let min = array[0];
  let max = array[0];

  for (let number of array) {
    sum += number;

    if (number < min) {
      min = number;
    }

    if (number > max) {
      max = number;
    }
  }

  return {
    average: sum / array.length,
    min: min,
    max: max,
    length: array.length,
  };
};
