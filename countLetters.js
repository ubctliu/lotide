// Function Implementation

// Takes a string and returns an object containing the characters of the string mapped to
// a value representing how often that character appeared in the string - skips whitespaces
const countLetters = function(string) {
  let stringCount = {};
  for (const char of string) {
    if (char !== " ") {
      if (!stringCount[char]) {
        stringCount[char] = 1;
      } else {
        stringCount[char] += 1;
      }
    }
  }
  return stringCount;
};

module.exports = countLetters;