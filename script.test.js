import { calculator, capitalize, reverseString } from "./script";

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