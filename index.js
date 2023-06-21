// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const flatten = require('./flatten');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  flatten: flatten,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual
};