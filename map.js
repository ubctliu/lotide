// Function Implementation

// Compares two values and logs a message indicating if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }  else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Checks if two arrays are perfectly equal
const eqArrays = function(array1, array2) {
  // If array lengths are not equal, terminate early and return false
  if (array1.length !== array2.length) {
    return false;
  }

  // Loop through and compare the indices directly to check for a perfect match
  // returns false if mismatch found
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

// Compares two arrays and logs a message indicating if they are equal or not
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Takes an array and a callback function, returning an array of the results of the
// callback function being used on the array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// Test Cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(['g', 'c', 't', 'm', 't'], results1);

const numbers = [5, 7, 9, 11, 15];
const numberTimesTwo = map(numbers, number => number * 2);
assertArraysEqual([10, 14, 18, 22, 30], numberTimesTwo);

const customers = ['Bob', 'Joe', 'Billy', 'Jean'];
const customerIsSarah = map(customers, customer => customer === 'Sarah');
assertArraysEqual([false, false, false, false], customerIsSarah);