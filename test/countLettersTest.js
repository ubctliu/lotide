const assert = require('chai').assert;
const countLetters = require('../countLetters');

// Test Cases

describe("#countLetters", () => {
  it("return {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d:1} for 'hello world'", () => {
    assert.deepEqual(countLetters("hello world"), {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d:1});
  });
});