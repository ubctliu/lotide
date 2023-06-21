const assert = require('chai').assert;
const tail = require('../tail');

// Test Code

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for array of length 1", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("original array should be unchanged and of length 3", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.equal(words.length, 3);
  });
});