# Jest Testing

This project is focused on providing an opportunity to practice writing test cases using Jest. The provided utility functions are intended to serve as examples for how to structure and write test cases using Jest. 

## Capitalize

The capitalize function takes a string and returns it with the first character capitalized:

```javascript
const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};
```

#### Test

```javascript
test("First character is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
```

## Reverse String

The reverseString function takes a string and returns it reversed:

```javascript
const reverseString = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
};
```

#### Test

```javascript
test("String is reversed", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
```

## Calculator

The calculator object contains functions for the basic operations:

```javascript
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
```

#### Test

```javascript
describe("Calculator", () => {
  test("Has add function", () => {
    expect(calculator).toHaveProperty("add");
    expect(calculator.add(3, 3)).toBe(6);
  });
  test("Has subtract function", () => {
    expect(calculator).toHaveProperty("subtract");
    expect(calculator.subtract(50, 25)).toBe(25);
  });
  test("Has divide function", () => {
    expect(calculator).toHaveProperty("divide");
    expect(calculator.divide(10, 5)).toEqual(2);
  });
  test("Has multiply function", () => {
    expect(calculator).toHaveProperty("multiply");
    expect(calculator.multiply(8, 2)).toEqual(16);
  });
});
```

## Caesar Cipher

The caesarCipher function takes a string and returns it with each character “shifted”:

```javascript
const getIndex = (index, shift) => {
  let newIndex = index + shift;

  if (newIndex < 0) {
    newIndex = 26 + newIndex;
  } else if (newIndex > 25) {
    newIndex = newIndex - 26;
  }

  return newIndex;
};

const caesarCipher = (string, shift) => {
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
```

#### Test

```javascript
test("String has each character shifted", () => {
  expect(caesarCipher("Hello!", 1)).toBe("Ifmmp!");
});
```

## Analyze Array

The analyzeArray function takes an array of numbers and returns an object with the following properties: average, min, max, and length:

```javascript
const analyzeArray = (array) => {
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
```

#### Test

```javascript
test("Returns the average, min, max, and length of an array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
```
