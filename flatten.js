// Function Implementation

// Takes an array and flattens it recursively - returns a non-nested array
const flatten = function(array) {
  let flattenedArray = [];
  for (const object of array) {
    if (Array.isArray(object)) {
      flattenedArray = flattenedArray.concat(flatten(object));
    } else {
      flattenedArray.push(object);
    }
  }
  return flattenedArray;
};


// Test Cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]