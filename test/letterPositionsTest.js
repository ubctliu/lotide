const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// Test Cases

describe("#letterPositions", () => {
  it("return {h: [0], e: [1], l:, [2, 3], o: [4]} for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]});
  });
});