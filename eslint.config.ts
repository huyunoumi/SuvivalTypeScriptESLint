import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin"; 

export default defineConfig([
  {
    plugins: {
      "@stylistic": stylistic,
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser } 
  },
  tseslint.configs.recommended,
  {
    // off(0), war(1), error(2)
    rules: {
      // console.log禁止
      "no-console": "warn",
      // プロパティ名は除外
      camelcase: ["warn", { properties: "never" }],
      // セミコロン必須
      "@stylistic/semi": ["warn", "always"],
    },
  },
]);
