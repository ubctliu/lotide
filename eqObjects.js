const eqArrays = require("./eqArrays");
// Function Implementation

// Takes two objects and returns true if both objects have identical keys
// with identical values otherwise returns false
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  let object1Keys = Object.keys(object1);
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
  return true;
};

module.exports = eqObjects;