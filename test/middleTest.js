const middle = require('../middle');
const assert = require('chai').assert;

// Test Code

describe('#tail', () => {
  it("returns [] for array of length 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3] - length of 3 / uneven", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4] - length of 4 / even", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [2] for both [1, 2, 3] && [0, 1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3]), middle([0, 1, 2, 3, 4]));
  });
});
