const findKey = require('../findKey');
const assert = require('chai').assert;

// Test Cases

describe("#findKey", () => {
  it("return noma for 2 stars", () => {
    const testCase1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2); // => "noma"
    assert.equal("noma", testCase1);
  });

  it("return undefined for 5 stars", () => {
    const testCase2 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 5); // => undefined
    assert.equal(undefined, testCase2);
  });
});