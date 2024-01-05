const reverseString = require("../scripts/reverseString");

test("reverse string", () => {
  expect(reverseString("javascript")).toEqual("tpircsavaj");
});

test("reverse string", () => {
  expect(reverseString("JavaScript is the best!")).toEqual(
    "!tseb eht si tpircSavaJ"
  );
});
