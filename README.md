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