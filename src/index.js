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

const { compute } = require('./calculator');

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

try {
  const result = compute(op, left, right);
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
