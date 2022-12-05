module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
    "react/react-in-jsx-scope": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
