const os = require('os');
const project = require('./package.json');
const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  brandTitle: 'Example Cucumber',
  metadata: {
    Version: project.version,
    Platform: `${os.type()} ${os.release()}`,
    CPUs: os.cpus().length,
    Uptime: `${os.uptime} seconds`
  },
};

reporter.generate(options);