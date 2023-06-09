// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.toString === expected.toString) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
      return true;
    }
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};


const eqArrays = function(array1, array2) {
  return assertEqual(array1, array2);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS