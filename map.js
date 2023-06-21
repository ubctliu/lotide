// Function Implementation

// Takes an array and a callback function, returning an array of the results of the
// callback function being used on the array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;