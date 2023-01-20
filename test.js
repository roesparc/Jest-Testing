import { capitalize, reverseString } from "./script";

test("First character is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("String is reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
