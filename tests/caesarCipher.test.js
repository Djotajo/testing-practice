const caesarCipher = require("../scripts/caesarCipher");

test("lowercase", () => {
  expect(caesarCipher("abcdef", 3)).toMatch(/[a-z]/);
});

test("uppercase", () => {
  expect(caesarCipher("EFGHIJK", 3)).toMatch(/[A-Z]/);
});

test("lowercase and uppercase", () => {
  expect(caesarCipher("abc DEF", 3)).toEqual("def GHI");
});

test("z to a and Z to A", () => {
  expect(caesarCipher("xyz XYZ", 3)).toEqual("abc ABC");
});

test("punctuation", () => {
  expect(caesarCipher("!abc.Xyz?", 3)).toEqual("!def.Abc?");
});
