import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    }
  },

  {
    files: ["tests/**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      }
    }
  }
];
