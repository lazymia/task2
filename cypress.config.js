const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://restful-booker.herokuapp.com/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    chromeWebSecurity: false,
   "watchForFileChanges" : false
,
    failOnStatusCode: false
  },
});
