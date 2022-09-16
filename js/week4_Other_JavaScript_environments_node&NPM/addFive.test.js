
const { default: test } = require("node:test");
const addFive = require(`./addFive`);
// `./`indicates the function is in the same fold with test file

test('statement description', () => {
    expect(addFive(1)).toBe(6)
})


