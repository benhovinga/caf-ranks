// __tests__/dom-test.js

const { myLibFunction } = require("../src/main.cjs"); // Require the CommonJS version

test("myLibFunction updates the DOM", () => {
  document.body.innerHTML = '<div id="output"></div>';
  const outputElement = document.getElementById("output");

  myLibFunction({}); // Assuming this function modifies the DOM

  expect(outputElement.textContent).toBe("");
});
