const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...

  expect(
    combineArrays(["Desk", "Computer"], ["Phone", "Tablet"])
  ).toStrictEqual(["Computer", "Desk", "Phone", "Tablet"]);

  expect(
    combineArrays(["apple", "pear"], ["watermelon", "orange"])
  ).toStrictEqual(["apple", "orange", "pear", "watermelon"]);

  expect(combineArrays(["paper", "pen"], ["book", "binder"])).toStrictEqual([
    "binder",
    "book",
    "paper",
    "pen",
  ]);

  expect(combineArrays(["chair", "window"], ["table", "wall"])).toStrictEqual([
    "chair",
    "table",
    "wall",
    "window",
  ]);
});
