// Function Implementation

// Compares two values and logs a message indicating if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Takes in an array of strings that we need to look through and an object specifying what
// to count and returns the indice of valid items - otherwise returns undefined
const countOnly = function(allItems, itemsToCount) {
  let seenNames = {};
  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (!seenNames[name]) {
        seenNames[name] = 1;
      } else {
        seenNames[name] += 1;
      }
    }
  }
  return seenNames;
};


// Test Cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);