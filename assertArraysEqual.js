// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.toString() === expected.toString()) {
      return true;
    }
  } else {
    return false;
  }
};


const eqArrays = function(array1, array2) {
  return assertEqual(array1, array2);
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};