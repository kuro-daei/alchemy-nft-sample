module.exports = {
  singleQuote: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
        explicitTypes: 'always',
      },
    },
  ],
};
