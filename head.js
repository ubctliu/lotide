// Function Implementation

// Takes in a non-empty array and returns the first indice - otherwise returns undefined
const head = function(array) {
  return array.length !== 0 ? array[0] : undefined;
};

module.exports = head;