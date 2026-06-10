// Calculator module implementing basic operations
// Supported operations:
//   +  addition
//   -  subtraction
//   *  multiplication
//   /  division

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

function compute(op, a, b) {
  switch (op) {
    case '+':
    case 'add':
      return add(a, b);
    case '-':
    case 'sub':
    case 'subtract':
      return subtract(a, b);
    case '*':
    case 'x':
    case 'X':
    case 'mul':
    case 'multiply':
      return multiply(a, b);
    case '/':
    case 'div':
    case 'divide':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operator '${op}'`);
  }
}

module.exports = { add, subtract, multiply, divide, compute };
