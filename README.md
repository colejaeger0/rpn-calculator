# RPN Calculator

Welcome to the Reverse Polish Notation Calculator! This tool allows users to perform RPN calculations from the command-line.

## Getting Started
- Make sure Node.js is installed
- Run "npm start" to get started
- Hit 'q' or CTRL-D to exit
- "npm test" runs tests

## Features

- Supports addition `+`, subtraction `-`, multiplication `*`, and division `/`.
- Allows users to view and clear the stack by entering `s` (to view) or `c` (to clear)

## Formatting

- Make sure all your calculations are formatted with spaces between all numbers and operators.
  Valid Examples: `5 66 -2 + / `, `6 6 +`
  Invalid Examples: `66+`, `5 6+ -2 *-`

## Architecture

- This program uses Typescript to ensure ____
- eslint is used to adhere to stylistic standards
- Jest testing library is used to ensure future scalability
- Several source files are used to *abstract*? code and establish readability inside index.ts

## This tool's future

If I had more time to develop this, I'd love to add a feature the user can toggle that displays each step of how operations are calculated via the stack when performing calculations. It could be a good learning tool for those interested in understanding how Reverse Polish Notation works.

Testing could be more elaborate and test for different errors in more specific cases like diving by zero and ensuring minute differences between assigning negative symbols vs minus symbols.
