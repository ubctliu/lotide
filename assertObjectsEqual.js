// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({name: "Bob", job: "Software Engineer"}, {name: "Bob", job: "Software Engineer"});
assertObjectsEqual({job: "Software Engineer", name: "Bob"}, {name: "Bob", job: "Software Engineer"});
assertObjectsEqual({name: "Bob", favFoods: ["ramen", "burgers"]}, {name: "Bob", favFoods: ["ramen", "burgers"]});
assertObjectsEqual({name: "Bob", favFoods: ["ramen", "burgers"]}, {name: "Bob", favFoods: ["burgers", "ramen"]});