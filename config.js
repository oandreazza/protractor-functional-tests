
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
   }
 },

  framework: 'jasmine',
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({

      // setup the output path for the junit reports
      savePath: '$CIRCLE_TEST_REPORTS/output/',

      // conslidate all true:
      //   output/junitresults.xml
      //
      // conslidate all set to false:
      //   output/junitresults-example1.xml
      //   output/junitresults-example2.xml
      consolidateAll: false

    });
    jasmine.getEnv().addReporter(junitReporter);
  }
};
