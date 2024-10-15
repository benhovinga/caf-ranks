// jest.setup.js
const { JSDOM } = require("jsdom");
const { window } = new JSDOM(`<!DOCTYPE html>`);
global.window = window;
global.document = window.document;
