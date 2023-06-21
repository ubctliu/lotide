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
  head, tail, middle, letterPositions, map, takeUntil, without,
  flatten, findKey, findKeyByValue, eqObjects, eqArrays, countOnly,
  countLetters, assertObjectsEqual, assertArraysEqual, assertEqual
};