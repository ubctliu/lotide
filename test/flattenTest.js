const flatten = require('../flatten');
const assert = require('chai').assert;

// Test Cases
describe("#flatten", () => {
  it("return a flattened array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});