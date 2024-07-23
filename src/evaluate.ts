import { isNumber } from './utils';

const operators = new Set(['+', '-', '/', '*']);

export const evaluate = function (expression: string, stack: number[]) {
  const arrayOfExpressions = expression.split(' ');
  for (const exp of arrayOfExpressions) {
    if (isNumber(exp)) {
      stack.push(Number(exp));
    } else if (operators.has(exp)) {
      if (stack.length < 2) {
        console.error('Stack too small to perform operation');
        return;
      }
      const b = stack.pop();
      const a = stack.pop();
      if (typeof a === 'number' && typeof b === 'number') {
        switch (exp) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            if (b === 0) {
              console.error('Error: Dividing by zero');
              return;
            }
            stack.push(a / b);
            break;
        }
      }
    } else {
      console.error('Error, invalid expression');
      return;
    }
  }
  return stack[stack.length - 1];
};
