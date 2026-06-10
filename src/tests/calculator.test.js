const calc = require('../calculator');

describe('calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.compute('+', 2, 3)).toBe(5);
    expect(calc.compute('add', [1, 2, 3, 4])).toBe(10);
  });

  test('subtraction: 10 - 4 = 6 (left-to-right)', () => {
    expect(calc.subtract(10, 4)).toBe(6);
    expect(calc.compute('-', 10, 4)).toBe(6);
    // multiple args: 10 - 3 - 2 = 5
    expect(calc.compute('sub', [10, 3, 2])).toBe(5);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
    expect(calc.compute('*', 45, 2)).toBe(90);
    expect(calc.compute('mul', [2, 3, 4])).toBe(24);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
    expect(calc.compute('/', 20, 5)).toBe(4);
    expect(calc.compute('div', [100, 2, 5])).toBe(10); // 100/2/5 = 10
  });

  test('division by zero throws', () => {
    expect(() => calc.divide(1, 0)).toThrow(/Division by zero/);
    expect(() => calc.compute('/', 1, 0)).toThrow(/Division by zero/);
    expect(() => calc.compute('div', [10, 2, 0])).toThrow(/Division by zero/);
  });

  test('unsupported operator throws', () => {
    expect(() => calc.compute('%', 2, 3)).toThrow(/Unsupported operator/);
  });

  test('compute validates input and arguments', () => {
    expect(() => calc.compute('add')).toThrow(/No numbers provided/);
    expect(() => calc.compute('add', [])).toThrow(/No numbers provided/);
  });
});
