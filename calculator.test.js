const { add, subtract, multiply, divide } = require('./index');

describe('calculator', () => {
  test('add', () => {
    const result = add(2, 3);
    console.log(`2 + 3 = ${result}`);
    expect(result).toBe(5);
  });

  test('subtract', () => {
    const result = subtract(10, 4);
    console.log(`10 - 4 = ${result}`);
    expect(result).toBe(6);
  });

  test('multiply', () => {
    const result = multiply(6, 7);
    console.log(`6 * 7 = ${result}`);
    expect(result).toBe(42);
  });

  test('divide', () => {
    const result = divide(8, 2);
    console.log(`8 / 2 = ${result}`);
    expect(result).toBe(4);
  });

  test('divide by zero', () => {
    console.log('Attempting to divide by zero...');
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});
