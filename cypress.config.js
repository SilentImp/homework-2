const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/results.xml",
    toConsole: true
  },
  e2e: {
    baseUrl: `https://silentimp.github.io/homework/`,
    supportFile: false,
    specPattern: './cypress/homework/spec1.js',
  },
})