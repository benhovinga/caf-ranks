export default {
  input: "src/main.cjs",
  output: [
    {
      file: "dist/caf-ranks.js",
      format: "iife", // For <script> tag usage (browser)
      name: "myLibFunction", // Expose as a global variable
    },
    {
      file: "dist/caf-ranks.module.js",
      format: "es", // ES Module for modern apps
    },
  ],
};
