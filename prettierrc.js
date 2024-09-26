module.exports = {
  bracketSpacing: true,
  printWidth: 82,
  proseWrap: "preserve",
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  arrowParens: "always",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.json",
      options: {
        singleQuote: false,
      },
    },
    {
      files: ".*rc",
      options: {
        singleQuote: false,
        parser: "json",
      },
    },
  ],
};
