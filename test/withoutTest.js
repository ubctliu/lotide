const without = require('../without');
const assert = require('chai').assert;

// Test Cases

describe("#without", () => {
  it("return [2, 3] for [1, 2, 3] & [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("return ['1', '2'] for ['1', '2', '3'] & [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
  });

  it("return original array unmodified", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});