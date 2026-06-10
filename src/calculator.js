/*
 Calculator module

 Supported operations:
 - Addition (+)
 - Subtraction (-)
 - Multiplication (*)
 - Division (/)
*/

// Parse arguments to numbers and validate
function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(`Invalid number: ${value}`);
  return n;
}

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
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = {
  toNumber,
  add,
  subtract,
  multiply,
  divide,
};
