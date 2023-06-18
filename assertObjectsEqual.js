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

// Returns true if both objects have identical keys with identical values.
// Otherwise returns false
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  // Loops through the key properties for both objects
  // if the key value is an array, then return false if arrays are not equal
  // if the key value is an object, then return false if object values are not equal
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (!Array.isArray(object1[key]) && !Array.isArray(object2[key]))
        if (object1[key] !== object2[key]) {
          return false;
        }
    }
    
  }

  for (const key of object2Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      console.log(eqArrays(object1[key], object2[key]));
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (!Array.isArray(object1[key]) && !Array.isArray(object2[key]))
        if (object1[key] !== object2[key]) {
          return false;
        }
    }
  }

  return true;
};

// Compares two objects and logs a message indicating if they are equal or not
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// Test Cases
assertObjectsEqual({name: "Bob", job: "Software Engineer"}, {name: "Bob", job: "Software Engineer"});
assertObjectsEqual({job: "Software Engineer", name: "Bob"}, {name: "Bob", job: "Software Engineer"});
assertObjectsEqual({name: "Bob", favFoods: ["ramen", "burgers"]}, {name: "Bob", favFoods: ["ramen", "burgers"]});
assertObjectsEqual({name: "Bob", favFoods: ["ramen", "burgers"]}, {name: "Bob", favFoods: ["burgers", "ramen"]});