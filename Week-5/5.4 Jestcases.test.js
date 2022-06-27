const { sum, diff, product } = require('./5.4 Jestcases');

test('2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('5 - 6 = -1', () => {
    expect(diff(5, 6)).toBe(-1);
  });

test('3 * 4 = 12', () => {
  expect(product(3, 4)).toBe(12);
});