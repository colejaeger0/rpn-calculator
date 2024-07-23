# RPN Calculator

Welcome to the Reverse Polish Notation Calculator! This tool allows users to perform RPN calculations from the command-line.

## Getting Started
- Make sure Node.js is installed
- Run "npm start" to get started
- "npm test" runs tests
- Hit 'q' or CTRL-D to exit

## Features

- Supports addition `+`, subtraction `-`, multiplication `*`, and division `/`.
- Allows users to view and clear the stack by entering `s` (to view) or `c` (to clear)

## Formatting

- Make sure all your calculations are formatted with spaces between all numbers and operators.
  Valid Examples: `5 66 -2 + / `, `6 6 +`
  Invalid Examples: `66+`, `5 6+ -2 *-`

## Solution

To create this command-line tool, I incorporated Node's Readline module with the rl.on method to listen for constant input from the user. For the RPN calculator, it seemed clear that this calculator demanded a stack data structure to push inputs into and perform operations on. I created a parsing mechanism that takes a string input by the user, and using Javascript's split method, splits the string into an array of expressions.

I then checked if these expressions were numbers or operators, after verifying if the user's string input was valid. Numbers were pushed to the stack, and operators were applied to the last two numbers popped from the stack. The result of that operation is then pushed to the stack. Finally, the user is returned the top number on the stack.

Satisfying my own itch to see what the status of the stack was at any given time, I added a command 's' that allows the user to view the stack.

## Architecture

- Typescript is used to establish typing and detect errors proactively
- eslint is used to adhere to stylistic standards
- Jest testing library is used to ensure future scalability
- Multiple modules to ensure readability inside index.ts and support testing

## This tool's future

If I had more time to develop this, I'd love to add a feature the user can toggle that displays each step of how operations are calculated via the stack when performing calculations. It could be a good learning tool for those interested in understanding how Reverse Polish Notation works.

A front-end could be created that displays a calculator, instructions, current stack, stack history, and result.

Testing could be more elaborate and test for different errors in more specific cases like diving by zero and ensuring minute differences between assigning negative symbols vs minus symbols.
