import {add} from './calculateSum.js'

// Test: Handling an Empty String
test('returns 0 for an empty string', function() {
  expect(add('')).toBe(0);
});

// Test: Handling a Single Number
test('returns the number itself for a single number', function() {
  expect(add('1')).toBe(1);
  expect(add('5')).toBe(5);
});

// Test: Handling Two Numbers
test('returns the sum of two numbers separated by a comma', function() {
  expect(add('1,2')).toBe(3);
});

// Test: Handling an Arbitrary Number of Numbers
test('returns the sum of an arbitrary number of numbers', function() {
  expect(add('1,2,3,4')).toBe(10);
});

// Test: Handling New Lines Between Numbers
test('handles new lines between numbers', function() {
  expect(add('1\n2,3')).toBe(6);
});

// Test: Support Different Delimiters
test('supports different delimiters', function() {
  expect(add('//;\n1;2')).toBe(3);
});

//Handling negative numbers
test('throws an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
  });
  
test('throws an exception listing all negative numbers', () => {
    expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2, -3');
});
  
