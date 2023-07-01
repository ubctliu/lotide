const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

// Test Cases

describe("#eqObjects", () => {

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

  it("return true for the same nested arrays within objects", () => {
    const studentGroups = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', ['Carter', 'Sam']], juniors: [['Sion', 'Kevin', 'Chance', 'Nick']] };
    const studentGroups2 = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', ['Carter', 'Sam']], juniors: [['Sion', 'Kevin', 'Chance', 'Nick']] };
    assert.deepEqual(eqObjects(studentGroups, studentGroups2), true);
  });

  it("return false for different nested arrays within objects", () => {
    const studentGroups = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', ['Carter', 'Sam']], juniors: [['Sion', 'Kevin', 'Chance', 'Nick']] };
    const studentGroups2 = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', ['Carter']], juniors: [['Kevin', 'Chance', 'Nick', 'Malena']] };
    assert.deepEqual(eqObjects(studentGroups, studentGroups2), false);
  });

  it("return true for the same nested objects within objects", () => {
    const studentGroups = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', { seniors: ['Carter', 'Sam'], juniors: ["Jones"]}], juniors: [['Sion', 'Kevin', 'Chance', 'Nick']] };
    const studentGroups2 = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', { seniors: ['Carter', 'Sam'], juniors: ["Jones"]}], juniors: [['Sion', 'Kevin', 'Chance', 'Nick']] };
    assert.deepEqual(eqObjects(studentGroups, studentGroups2), true);
  });

  it("return false for different nested objects within objects", () => {
    const studentGroups = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', { seniors: ['Carter', 'Sam'], juniors: ["Jones"]}], juniors: [['Sion', 'Kevin', 'Chance', 'Nick']] };
    const studentGroups2 = { seniors: ['Alex', 'Chris', 'Chandler', 'Jimmy', { seniors: ['Carter', 'Sam'], juniors: ["Christopher"]}], juniors: [['Sion', 'Kevin', 'Chance', 'Nick']] };
    assert.deepEqual(eqObjects(studentGroups, studentGroups2), false);
  });


});