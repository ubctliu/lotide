const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS