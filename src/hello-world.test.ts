import { evaluate } from './evaluate';
import { isInvalid } from './utils';

describe('basic RPN operations', () => {
  test('should correctly add two numbers', () => {
    expect(evaluate('5 5 +', [])).toBe(10);
  });

  test('should handle complex inputs & return 0', () => {
    expect(evaluate('5 5 8 5 + + - 13 +', [])).toBe(0);
  });

  test('should handle negative inputs', () => {
    expect(evaluate('-3 -2 * 5 +', [])).toBe(11);
  });

  test('should not accept improperly formatted inputs', () => {
    expect(isInvalid('3 5+')).toBe(true);
  });
});
