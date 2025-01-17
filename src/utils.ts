export const isNumber = (n: string): boolean => !isNaN(Number(n)) && n !== ' ';

export const isInvalid = (expression: string) => {
  const invalidPatterns = [/\d[\+\-\*\/]/, /[\+\-\*\/]{2}/]; //handling invalid entries
  const invalidTest = invalidPatterns.some((pattern) => pattern.test(expression));
  if (invalidTest === true) {
    return true;
  }
};
