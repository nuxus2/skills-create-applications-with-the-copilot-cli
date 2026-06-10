#!/usr/bin/env node

// Simple Node.js CLI Calculator
// Supported operations:
//   +  addition
//   -  subtraction
//   *  multiplication
//   /  division
// Usage (positional arguments):
//   node src/index.js <left> <op> <right>
// Examples:
//   node src/index.js 2 + 3
//   node src/index.js 10 / 4

const [,, leftArg, opArg, rightArg] = process.argv;

function printUsage() {
  console.log('Usage: node src/index.js <left> <op> <right>');
  console.log('Operations: + - * /');
  console.log('Examples:');
  console.log('  node src/index.js 2 + 3');
  console.log('  node src/index.js 10 / 4');
}

if (!leftArg || !opArg || !rightArg) {
  printUsage();
  process.exit(1);
}

const left = Number(leftArg);
const right = Number(rightArg);
const op = opArg.trim();

if (Number.isNaN(left) || Number.isNaN(right)) {
  console.error('Error: both left and right operands must be numbers.');
  process.exit(1);
}

let result;
switch (op) {
  case '+':
  case 'add':
    result = left + right;
    break;
  case '-':
  case 'sub':
  case 'subtract':
    result = left - right;
    break;
  case '*':
  case 'x':
  case 'X':
  case 'mul':
  case 'multiply':
    result = left * right;
    break;
  case '/':
  case 'div':
  case 'divide':
    if (right === 0) {
      console.error('Error: division by zero');
      process.exit(1);
    }
    result = left / right;
    break;
  default:
    console.error(`Error: unsupported operator '${op}'.`);
    printUsage();
    process.exit(1);
}

console.log(result);
