// Function Implementation

// Compares two values and logs a message indicating if they are equal or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Takes in an object and a value, returning the key of the first key value pair
// that contains value
const findKeyByValue = function(object, value) {
  let foundKey;
  Object.keys(object).forEach((keyValue) => {
    if (value === object[keyValue]) {
      foundKey = keyValue;
    }
  });
  return foundKey;
};

// Test Cases

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const roommateChores = {
  Paul: "Dusting",
  Alan: "Vacuuming",
  Andrew:  "Dishes"
};

assertEqual(findKeyByValue(roommateChores, "Dusting"), "Paul");
assertEqual(findKeyByValue(roommateChores, "Vacuuming"), "Alan");
assertEqual(findKeyByValue(roommateChores, "Mopping"), undefined);