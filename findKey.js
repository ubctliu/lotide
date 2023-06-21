// Function Implementation

// Takes in an object and a callback function, returning the key of the first key value pair
// that matches the callback function requirements
const findKey = function(object, callback) {
  let returnKey;
  for (const key in object) {
    if (callback(object[key])) {
      returnKey = key;
      return returnKey;
    }
  }
  returnKey;
};

module.exports = findKey;