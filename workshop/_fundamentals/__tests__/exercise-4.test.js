const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { name: "tom", age: 25 },
        { name: "bruce", age: 7 },
        { name: "sam", age: 19 },
      ],
      "name"
    )
  ).toStrictEqual(["tom", "bruce", "sam"]);
  expect(
    getValues(
      [
        { name: "tom", age: 25 },
        { name: "bruce", age: 7 },
        { name: "sam", age: 19 },
      ],
      "age"
    )
  ).toStrictEqual(["25", "7", "19"]);
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "age"
    )
  ).toStrictEqual(["23", "36", "43"]);
});
