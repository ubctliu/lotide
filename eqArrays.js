// Function Implementation

// Checks if two arrays are perfectly equal
const eqArrays = function(array1, array2) {
  // If array lengths are not equal, terminate early and return false
  if (array1.length !== array2.length) {
    return false;
  }

  // Loop through and compare the indices directly to check for a perfect match
  // returns false if mismatch found
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;