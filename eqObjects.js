const eqArrays = require("./eqArrays");
// Function Implementation

// Takes two objects and returns true if both objects have identical keys
// with identical values otherwise returns false
const eqObjects = function(object1, object2) {
  return compareKeys(object1, object2);
};

const compareKeys = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  // Loops through the key properties for both objects
  // if the key value is an array, then return false if arrays are not equal
  // if the key value is an object, then return false if object values are not equal
  for (const key of object1Keys) {
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else
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
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else
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
  return true;
};

module.exports = eqObjects;