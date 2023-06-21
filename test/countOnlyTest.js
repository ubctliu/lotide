const countOnly = require('../countOnly');
const assert = require('chai').assert;

// Test Cases

describe("#countOnly", () => {
  it("return indices of valid numbers, undefined for not", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    
    assert.equal(result1["Jason"], 1);
    assert.equal(result1["Karima"], undefined);
    assert.equal(result1["Fang"], 2);
    assert.equal(result1["Agouhanna"], undefined);
  });
});