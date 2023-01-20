import { capitalize } from "./script";

test("First character is capitalized", () =>
  expect(capitalize("hello")).toBe("Hello"));
