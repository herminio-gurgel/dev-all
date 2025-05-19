import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactPlugin from "eslint-plugin-react";
import eslintPluginJest from "eslint-plugin-jest";

export default tseslint.config(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: [
      "dist",
      "babel.config.cjs",
      "src/__mocks__/**",
      "lint-staged.config.js",
    ],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      jest: eslintPluginJest,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["**/*.test.{ts,tsx}"],
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
    },
  },
  {
    extends: [js.configs.recommended, eslintConfigPrettier],
  },
);
