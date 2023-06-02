module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    jest: true,
    browser: true,
    es2021: true,
    amd: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended" // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "react/no-irregular-whitespace": 0,
    "react/no-unescaped-entities": 0,
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "prettier/prettier": ["error", { endOfLine: "auto" }]
  }
}
