module.exports = {
    env: {
      browser: true,
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint",
      "plugin:jest/all"
    ],
    plugins: [
      "jest",
      "@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module"
    },
    rules: {
    }
  }