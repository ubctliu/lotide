// Function Implementation

// Takes an array and returns the middle of the array as an array items if
// the array if even and 1 if the array is odd - returns nothing if array
// length is less than or equal to 2
const middle = function(array) {
  const returnArray = [];
  const midpoint = array.length / 2;
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 0) {
    returnArray.push(array[(midpoint) - 1], array[midpoint]);
  } else {
    returnArray.push(array[Math.floor(midpoint)]);
  }
  return returnArray;
};

module.exports = middle;