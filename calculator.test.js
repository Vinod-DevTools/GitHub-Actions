import { add, subtract, multiply, divide } from "../calculator/index.js";

describe("calculator functions", () => {
  test("add",      () => expect(add(2, 3)).toBe(5));
  test("subtract", () => expect(subtract(7, 4)).toBe(3));
  test("multiply", () => expect(multiply(6, 5)).toBe(30));
  test("divide",   () => expect(divide(8, 2)).toBe(4));
  test("divide by zero", () =>
    expect(() => divide(9, 0)).toThrow("Division by zero"));
});
