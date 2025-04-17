const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',   
  e2e: {
    
    "specPattern": "**/*.feature",

    "projectId": "visfvj", 

    "video":true,
    "viewportWidth": 1000,
    "viewportHeight": 660,
    "defaultCommandTimeout":20000,
    "pageloadTimeout":120000,
    "videoCompression":51,
    "videosFolder":"cypress/chethan",
    "base url": "https://opensource-demo.orangehrmlive.com",
    //"excludeSpecPattern":[relative path of the file]
    //  "retries":{

    //    "openMode":1, 
    //    "runMode":1,
    //  },

    setupNodeEvents(on, config) {
      
      allureWriter(on, config);
      return config;
      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      
      on('task', {downloadFile})
      
      // implement node event listeners here
    },
  },
});
