// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.toString() === expected.toString()) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    }
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
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