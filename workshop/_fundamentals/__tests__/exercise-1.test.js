const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["desk", "computer"])).toBe(12);
  expect(letterCount(["tom", "bruce"])).toBe(8);
  expect(letterCount(["phone", "tablet"])).toBe(11);
  expect(letterCount(["book", "pen"])).toBe(7);
});
