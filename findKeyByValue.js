// Function Implementation

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

module.exports = findKeyByValue;