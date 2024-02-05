module.exports = {
  plugins: ['prettier-plugin-solidity'],
  overrides: [
    {
      files: '*.sol',
      options: {
        bracketSpacing: true,
        printWidth: 120,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
      },
    },
    {
      files: '*.js',
      options: {
        trailingComma: 'es5',
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    },
  ],
};
