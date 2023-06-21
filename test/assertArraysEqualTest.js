const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual([], []); // true
assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]); // true
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // false