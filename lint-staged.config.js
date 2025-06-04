export default {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{html,css,yaml,md,json}": "prettier --write",
  "*.test.{js,jsx,ts,tsx}": "jest --findRelatedTests --passWithNoTests",
  "**/*.ts?(x)": () => "tsc -p tsconfig.app.json --noEmit",
};
