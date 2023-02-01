const { defineConfig } = require("cypress");
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
  const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
  const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
  const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "reportTitle": "My test report",
    "reportDir": "cypress/results",
    "overwrite": true,
    "html": false,
    "json": true
  },
  e2e: {
    async setupNodeEvents(on,config)  {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      )
      return config
      
    },
    // specPattern: "cypress/e2e/features/*.feature"
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },
  
});
