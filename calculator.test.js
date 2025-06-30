const { add, subtract, multiply, divide } = require('./index');

describe('calculator', () => {
  test('add',      () => expect(add(2, 3)).toBe(5));
  test('subtract', () => expect(subtract(10, 4)).toBe(6));
  test('multiply', () => expect(multiply(6, 7)).toBe(42));
  test('divide',   () => expect(divide(8, 2)).toBe(4));
  test('divide by zero', () =>
    expect(() => divide(5, 0)).toThrow('Division by zero'));
});
