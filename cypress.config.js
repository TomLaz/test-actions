const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    supportFile: false,
    specPattern: 'cypress/integration/**/*.cy.js'
  },
})