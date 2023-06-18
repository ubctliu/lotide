// Function Implementation

// Compares two values and logs a message indicating if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Takes in a non-empty array and returns the first indice - otherwise returns undefined
const head = function(array) {
  return array.length !== 0 ? array[0] : undefined;
};


// Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");