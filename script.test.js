import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  reverseString,
} from "./script";

test("First character is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("String is reversed", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

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

test("String has each character shifted", () => {
  expect(caesarCipher("Hello!", 1)).toBe("Ifmmp!");
});

test("Returns the average, min, max, and length of an array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
