#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - add: Addition
 * - sub: Subtraction
 * - mul: Multiplication
 * - div: Division
 * 
 * Usage:
 *   node calculator.js add 2 3        # outputs 5
 *   node calculator.js sub 5 2        # outputs 3
 *   node calculator.js mul 3 4        # outputs 12
 *   node calculator.js div 10 2       # outputs 5
 */

const args = process.argv.slice(2);

// Display help if no arguments provided
if (args.length === 0) {
  console.log('Usage: calculator.js <operation> <num1> <num2>');
  console.log('');
  console.log('Operations:');
  console.log('  add  - Addition');
  console.log('  sub  - Subtraction');
  console.log('  mul  - Multiplication');
  console.log('  div  - Division');
  console.log('');
  console.log('Examples:');
  console.log('  node calculator.js add 10 5');
  console.log('  node calculator.js sub 10 5');
  console.log('  node calculator.js mul 10 5');
  console.log('  node calculator.js div 10 5');
  process.exit(0);
}

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// Validate numeric input
if (isNaN(num1) || isNaN(num2)) {
  console.error('Error: Both arguments must be valid numbers');
  process.exit(1);
}

let result;

// Perform the requested operation
switch (operation.toLowerCase()) {
  case 'add':
    // Addition operation
    result = num1 + num2;
    break;
  
  case 'sub':
    // Subtraction operation
    result = num1 - num2;
    break;
  
  case 'mul':
    // Multiplication operation
    result = num1 * num2;
    break;
  
  case 'div':
    // Division operation
    if (num2 === 0) {
      console.error('Error: Cannot divide by zero');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  
  default:
    console.error(`Error: Unknown operation '${operation}'. Supported operations: add, sub, mul, div`);
    process.exit(1);
}

console.log(result);
