import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Konfigurasi umum untuk semua file JS
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },

  // Konfigurasi khusus untuk file test (Jest)
  {
    files: ["_tests_/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest  // ⬅️ Bagian penting
      }
    }
  }
]);
