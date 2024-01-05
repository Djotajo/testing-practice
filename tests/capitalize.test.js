// import capitalize from "../scripts/capitalize";

const capitalize = require("../scripts/capitalize");

test("capitalize", () => {
  expect(capitalize("petar").charAt(0)).toMatch(/[A-Z]/);
});

// const sum = require("../scripts/capitalize");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });
// expect(capitalize("petar")).toMatch(/^[A-Z][a-z0-9_-]{3,19}$/);
