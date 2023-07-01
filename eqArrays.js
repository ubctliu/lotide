// Function Implementation

// Takes two arrays and returns true if both arrays have identical values in the same order otherwise returns false
const eqArrays = function(array1, array2) {
  // If array lengths are not equal, terminate early and return false
  if (array1.length !== array2.length) {
    return false;
  }

  // Loop through and compare the indices directly to check for a perfect match
  // returns false if mismatch found
  for (let i = 0; i < array1.length; i++) {
    // if both indices are arrays, call eqArrays recursively
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      // if arrays are not equal, return false
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // otherwise return true
  return true;
};

module.exports = eqArrays;