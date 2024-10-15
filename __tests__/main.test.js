// __tests__/my-lib.test.js

const { myLibFunction } = require("../src/main.cjs"); // Require the CommonJS version

test("myLibFunction returns correct result", () => {
  const params = { key: "value" };
  const result = myLibFunction(params);

  expect(result).toEqual({
    result: "This is your result!",
    params: { key: "value" },
  });
});
