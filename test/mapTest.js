const map = require('../map');
const assert = require('chai').assert;

// Test Cases

describe("#map", () => {
  it("return ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major' 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(['g', 'c', 't', 'm', 't'], results1);
  });

  it("return ['10', '14', '18', '22', '30'] for ['5', '7', '9', '11' '15']", () => {
    const numbers = [5, 7, 9, 11, 15];
    const numberTimesTwo = map(numbers, number => number * 2);
    assert.deepEqual([10, 14, 18, 22, 30], numberTimesTwo);
  });

  it("return [false, false, false, false] for ['Bob', 'Joe', 'Billy', 'Jean']", () => {
    const customers = ['Bob', 'Joe', 'Billy', 'Jean'];
    const customerIsSarah = map(customers, customer => customer === 'Sarah');
    assert.deepEqual([false, false, false, false], customerIsSarah);
  });
});