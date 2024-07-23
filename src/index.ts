import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline';

import { evaluate } from './evaluate';
import { isInvalid } from './utils';

const rl = readline.createInterface({ input, output });

console.log(`\nWelcome to the RPN calculator!\nStart entering expressions or enter ${"'i'"} for instructions\n`);

let stack: number[] = [];

export const process = function (expression: string) {
  expression = expression.trim();

  if (expression === 'i') {
    return `
INSTRUCTIONS
To use the RPN calculator, enter a valid RPN expression, followed by ENTER
Enter 'c' or 'clear' to clear the stack
Enter 's' or 'stack' to view the current stack
Enter 'q' to quit
        `;
  }
  if (expression === 'clear' || expression === 'c') {
    stack = [];
    return 'Stack cleared';
  }
  if (expression === 'stack' || expression === 's') {
    return `Stack: ${JSON.stringify(stack)}`;
  }
  if (expression === 'q') {
    rl.close();
    return 'Goodbye!';
  }

  if (isInvalid(expression) === true) {
    console.error('Error, invalid expression');
    return;
  }

  return evaluate(expression, stack);
};

rl.on('line', (input: string) => {
  const result = process(input);
  if (result !== undefined) {
    console.log(result);
  }
});
