module.exports = {
  setupFiles: ['./__tests__/setup'],
  // setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',

  //   testRegex: `\/src\/.*\.unit\.test\.js`, // `\/src\/**\/*.unit.test.js`,
  verbose: true,
  globals: {
    NODE_ENV: 'development',
  },
};
