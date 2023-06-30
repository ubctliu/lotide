// Function Implementation

// Takes a string and returns an object containing the characters of the string mapped to
// a value representing how often that character appeared in the string - skips whitespaces
const countLetters = function(string) {
  let stringCount = {};
  for (const char of string) {
    // if character isn't a white space
    if (char !== " ") {
      // if character hasn't been seen yet, initialize it to 1, otherwise increase count by 1
      if (!stringCount[char]) {
        stringCount[char] = 1;
      } else {
        stringCount[char] += 1;
      }
    }
  }
  // returns object with all the found results
  return stringCount;
};

module.exports = countLetters;