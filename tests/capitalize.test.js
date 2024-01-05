const capitalize = require("../scripts/capitalize");

test("capitalize", () => {
  expect(capitalize("petar").charAt(0)).toMatch(/[A-Z]/);
});
