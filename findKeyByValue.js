// Function Implementation

// Takes in an object and a value, returning the key of the first key value pair
// that contains value
const findKeyByValue = function(object, value) {
  for (const keyValue of Object.keys(object)) {
    if (value === object[keyValue]) {
      return keyValue;
    }
  }
};

module.exports = findKeyByValue;