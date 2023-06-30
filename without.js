// Function Implementation

// Takes two arrays and removes the values of the second array from the first array then
// returns the remaining contents of the first array
const without = function(array, remove) {
  // creates a shallow copy of array
  let arr = Array.from(array);
  for (const object of remove) {
    // while the shallow copy contains the object from the removal array, remove it from the array
    while (arr.indexOf(object) !== -1) {
      arr.splice(arr.indexOf(object), 1);
    }
  }
  // return the final array without the values from the second array
  return arr;
};

module.exports = without;