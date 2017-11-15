module.exports = {
  setupFiles: ['./__tests__/setup'],
  // setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  //   testRegex: `\/src\/.*\.unit\.test\.js`, // `\/src\/**\/*.unit.test.js`,
  verbose: true,
  globals: {
    NODE_ENV: 'development',
  },
};
