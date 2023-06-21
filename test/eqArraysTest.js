const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

// Test Code

describe("#eqArrays", () => {
  it("return true for an equal array in the same positions", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("return false for an unequal array", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });

  it("return false for an equal array in different positions", () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
});