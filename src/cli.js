#!/usr/bin/env node
/*
 Node.js CLI for basic calculator operations.
 Supports: add (+), sub (-), mul (*), div (/)

 Usage:
   node src/cli.js <operation> <num1> <num2>
 Examples:
   node src/cli.js add 2 3
   node src/cli.js + 2 3
*/

const calc = require('./calculator');

const argv = process.argv.slice(2);
if (argv.length !== 3 || argv[0] === '--help' || argv[0] === '-h') {
  console.error('Usage: node src/cli.js <operation> <num1> <num2>');
  console.error('Operations: add (+), sub (-), mul (*), div (/)');
  process.exit(1);
}

const [opInput, aRaw, bRaw] = argv;

const opMap = {
  '+': 'add',
  'add': 'add',
  '-': 'subtract',
  'sub': 'subtract',
  '*': 'multiply',
  'x': 'multiply',
  'X': 'multiply',
  '×': 'multiply',
  'mul': 'multiply',
  '/': 'divide',
  '÷': 'divide',
  'div': 'divide',
};

const op = opMap[opInput] || opMap[opInput.toLowerCase()];
if (!op) {
  console.error(`Unknown operation: ${opInput}`);
  console.error('Supported operations: add (+), sub (-), mul (*), div (/)');
  process.exit(1);
}

let a, b;
try {
  a = calc.toNumber(aRaw);
  b = calc.toNumber(bRaw);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

try {
  let result;
  switch (op) {
    case 'add':
      result = calc.add(a, b);
      break;
    case 'subtract':
      result = calc.subtract(a, b);
      break;
    case 'multiply':
      result = calc.multiply(a, b);
      break;
    case 'divide':
      result = calc.divide(a, b);
      break;
    default:
      throw new Error('Unsupported operation');
  }
  // Print result (if integer, print as integer; otherwise print float)
  console.log(result);
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
