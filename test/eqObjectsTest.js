const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

// Test Cases

describe("#eqObjects", () => {
  it("return true for objects with the same keys and values in the same order", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("return true for objects with the same keys and values in the same order", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("return true for objects with the same keys and values in a different order", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
});