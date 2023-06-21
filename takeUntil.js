// Function Implementation

// Takes an array and a callback - loops through the array and adds the indices
// to a return array until the callback function returns true, then terminates
// and returns every indice stored up until that point
const takeUntil = function(array, callback) {
  let matched = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return matched;
    }
    matched.push(array[i]);
  }
  return matched;
};

module.exports = takeUntil;