#!/usr/bin/env node

/**
 * Calculator CLI and module
 * Supported operations (based on provided image):
 *  - add : addition
 *  - sub : subtraction
 *  - mul : multiplication
 *  - div : division
 *
 * The module exports basic functions and a compute() helper. When run as a
 * script it acts as a CLI: node src/calculator.js <op> <num1> <num2> [...nums]
 */

// Basic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Compute supports the four basic operations over a list of numbers.
// For add/mul all numbers are combined. For sub/div the operation is
// applied left-to-right starting from the first argument.
function compute(op, numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('No numbers provided');
  }

  switch (op) {
    case '+':
    case 'add':
      return numbers.reduce((a, b) => a + b, 0);
    case '-':
    case 'sub':
    case 'subtract':
      return numbers.slice(1).reduce((a, b) => a - b, numbers[0]);
    case '*':
    case 'x':
    case 'X':
    case 'mul':
    case 'multiply':
      return numbers.reduce((a, b) => a * b, 1);
    case '/':
    case 'div':
    case 'divide':
      if (numbers.slice(1).some((n) => n === 0)) {
        throw new Error('Division by zero');
      }
      return numbers.slice(1).reduce((a, b) => a / b, numbers[0]);
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

// CLI entrypoint
function printHelp() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2> [...nums]');
  console.log('Operations: add, sub, mul, div');
}

if (require.main === module) {
  const [, , op, ...rest] = process.argv;
  if (!op || rest.length < 2) {
    printHelp();
    process.exit(1);
  }

  const nums = rest.map((s) => {
    const n = Number(s);
    if (Number.isNaN(n)) {
      console.error(`Invalid number: ${s}`);
      process.exit(2);
    }
    return n;
  });

  try {
    const res = compute(op, nums);
    console.log(res);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(3);
  }
}

module.exports = { add, subtract, multiply, divide, compute };
