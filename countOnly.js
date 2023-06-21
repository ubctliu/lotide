// Function Implementation

// Takes in an array of strings that we need to look through and an object specifying what
// to count and returns the indice of valid items - otherwise returns undefined
const countOnly = function(allItems, itemsToCount) {
  let seenNames = {};
  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (!seenNames[name]) {
        seenNames[name] = 1;
      } else {
        seenNames[name] += 1;
      }
    }
  }
  return seenNames;
};

module.exports = countOnly;