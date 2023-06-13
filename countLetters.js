// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.toString() === expected.toString()) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    }
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters("hello world"));