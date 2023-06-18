// Test/Assertion Functions

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

// Takes an array and returns the middle of the array as an array items if
// the array if even and 1 if the array is odd - returns nothing if array
// length is less than or equal to 2
const middle = function(array) {
  const returnArray = [];
  const midpoint = array.length / 2;
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 0) {
    returnArray.push(array[(midpoint) - 1], array[midpoint]);
  } else {
    returnArray.push(array[Math.floor(midpoint)]);
  }
  return returnArray;
};

//Test Cases
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), middle([0, 1, 2, 3, 4]));