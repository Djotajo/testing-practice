const calculator = require("../scripts/calculator");

test("calculator add", () => {
  expect(calculator.add(2, 2)).toEqual(4);
});

test("calculator subtract", () => {
  expect(calculator.subtract(5, 2)).toEqual(3);
});

test("calculator multiply", () => {
  expect(calculator.multiply(3, 3)).toEqual(9);
});

test("calculator divide", () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});
