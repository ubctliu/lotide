// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }  else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, 1);
assertEqual(1, 2);