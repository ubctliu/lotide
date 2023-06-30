// Function Implementation

// Takes in an array of strings that we need to look through and an object specifying what
// to count and returns the indice of valid items - otherwise returns undefined for that key-pair
const countOnly = function(allItems, itemsToCount) {
  let seenNames = {};
  for (const name of allItems) {
    // if item exists in the list of items to count
    if (itemsToCount[name]) {
      // if item hasn't been seen yet, initialize it to 1, otherwise increase count by 1
      if (!seenNames[name]) {
        seenNames[name] = 1;
      } else {
        seenNames[name] += 1;
      }
    }
  }
  // returns object with all the found results
  return seenNames;
};

module.exports = countOnly;