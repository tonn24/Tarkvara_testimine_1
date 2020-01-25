const sum = require("./sum");

test('sum 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sum 3 + 2 equals 5', () => {
    expect(sum(3, 2)).toBe(5);
});

const testCases = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 5, 8],
    [-5, -9, -14]
];

test.each(testCases)('sum(%d, %d) => %d', (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
})