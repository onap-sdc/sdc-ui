var getWebPackConfig = require('../ng2-component-lab.webpack.config.js');

module.exports = {
  webpackConfig: getWebPackConfig,
  host: 'localhost',
  port: 6009,
  include: [],
  suites: {
    feature: './.ng2-component-lab/lab-configuration.module.ts'
  }
};
