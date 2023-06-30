# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @t.liu/lotide`

**Require it:**

`const _ = require('@t.liu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Takes in a non-empty array and returns the first indice - otherwise returns undefined
* `middle(arr)`: Takes an array and returns the middle of the array as an array items if
the array if even and 1 if the array is odd - returns nothing if array length is less than or equal to 2
* `tail(arr)`: Takes an array and returns an array with every indice except for the head (first index)
* `map(arr, callback)`: Takes an array and a callback function, returning an array of the results of the callback function being called on each element in the array
* `takeUntil(arr, callback)`: Takes an array and a callback - loops through the array and adds the indices to a return array until the callback function returns true, then terminates and returns every indice stored up until that point
* `without(arr1, arr2)`: Takes two arrays and removes the values of the second array from the first array then returns the remaining contents of the first array
* `letterPositions(sentence)`: Takes in an sentence and returns an object containing key value pairs representing the characters of the sentence and an array containing the indices of their locations
* `flatten(arr)`: Takes an array and flattens it recursively - returns a non-nested array
* `findKeyByValue(obj, value)`: Takes in an object and a value, returning the key of the first key value pair that contains value
* `findKey(obj, callback)`: Takes in an object and a callback function, returning the key of the first key value pair that matches the callback function requirements
* `eqObjects(obj1, obj2)`: Takes two objects and returns true if both objects have identical keys with identical values otherwise returns false
* `eqArrays(arr1, arr2)`: Takes two arrays and returns true if both arrays have identical values in the same order otherwise returns false
* `countOnly(arr, obj)`: Takes in an array of strings that we need to look through and an object specifying what to count and returns the indice of valid items - otherwise returns undefined for that key-pair
* `countLetters(str)`: Takes a string and returns an object containing the characters of the string mapped to a value representing how often that character appeared in the string - skips whitespaces
* `assertEqual(obj1, obj2)`: Compares two primitives/objects for strict equality - prints result to console with no return (DEPRECATED)
* `assertObjectsEqual(obj1, obj2)`: Compares two objects for equality - prints result to console with no return (DEPRECATED)
* `assertArraysEqual(arr1, arr2)`: Compares two arrays for equality - prints result to console with no return (DEPRECATED)