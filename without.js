// Function Implementation

// Takes two arrays and removes the values of the second array from the first array then
// returns the remaining contents of the first array
const without = function(array, remove) {
  let arr = Array.from(array);
  for (const object of remove) {
    while (arr.indexOf(object) !== -1) {
      arr.splice(arr.indexOf(object), 1);
    }
  }
  return arr;
};

module.exports = without;