const calc = require('../calculator');

describe('Calculator extended operations', () => {
  test('modulo returns remainder of division', () => {
    expect(calc.modulo(5, 2)).toBe(1);
    expect(calc.modulo(10, 3)).toBe(1);
    expect(calc.modulo(0, 5)).toBe(0);
  });

  test('modulo by zero throws', () => {
    expect(() => calc.modulo(5, 0)).toThrow(/Modulo by zero/);
  });

  test('power returns base raised to exponent', () => {
    expect(calc.power(2, 3)).toBe(8);
    expect(calc.power(5, 0)).toBe(1);
    expect(calc.power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot returns correct root for positive numbers', () => {
    expect(calc.squareRoot(16)).toBe(4);
    expect(calc.squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('squareRoot of negative number throws', () => {
    expect(() => calc.squareRoot(-9)).toThrow(/Square root of negative number/);
  });
});
