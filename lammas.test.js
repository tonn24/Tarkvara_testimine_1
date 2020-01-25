const Lammas = require("./lammas");

test('create lammas with name dolly, check that name is dolly', () => {
    const l = new Lammas('dolly')
    expect(new Lammas('dolly').getName()).toBe('dolly');
});

const testCases = [
    ['dolly', 'dolly'],
    ['Marsha', 'Marsha'],
];

/* test.each(testCases)(' => ', (Lammas.getName(), expected) => {
    expect(new Lammas().getName()).toBe(expected);
}) */
