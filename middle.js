// Test/Assertion Functions

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (!array1.includes(array2[i])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};

// Actual Function
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