// Function Implementation

// Takes in an sentence and returns an object containing key value pairs representing
// the characters of the sentence and an array containing the indices of their locations
const letterPositions = function(sentence) {
  const results = {};
  for (const char in sentence) {
    if (sentence[char] !== " ") {
      if (!results[sentence[char]]) {
        results[sentence[char]] = [];
      }
      results[sentence[char]].push(Number(char));
    }
  }
  return results;
};

module.exports = letterPositions;