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

const without = function(array, remove) {
  let arr = Array.from(array);
  for (const object of remove) {
    while (arr.indexOf(object) !== -1) {
      arr.splice(arr.indexOf(object), 1);
    }
  }
  return arr;
};

// Test Cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);