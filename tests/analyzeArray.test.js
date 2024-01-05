const analyzeArray = require("../scripts/analyzeArray");

test("average", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toEqual(3);
});

test("min", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toEqual(1);
});

test("max", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toEqual(5);
});

test("length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toEqual(5);
});
