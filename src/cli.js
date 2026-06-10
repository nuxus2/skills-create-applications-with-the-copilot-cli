#!/usr/bin/env node
'use strict';
/**
 * CLI wrapper for calculator module.
 * Supported operations:
 * - addition (add, +)
 * - subtraction (sub, -)
 * - multiplication (mul, *, x)
 * - division (div, /)
 */

const calc = require('./calculator');

const args = process.argv.slice(2);

function usage() {
  console.error('Usage: calc <operation> <num1> <num2> [...nums]');
  console.error('Operations: add|sub|mul|div or + - * /');
  process.exit(1);
}

if (args.length < 3) {
  usage();
}

const op = args[0];
const nums = args.slice(1).map((s) => {
  const n = Number(s);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${s}`);
    process.exit(2);
  }
  return n;
});

try {
  const result = calc.compute(op, nums);
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(3);
}
