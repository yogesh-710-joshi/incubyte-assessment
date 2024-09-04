import {add} from './calculateSum.js'

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
  });
