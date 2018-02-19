// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
let webpackConfig = require('./webpack.test');
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-coverage'),
    ],
    client: {
      clearContext: false
    },
    files: [
      { pattern: 'src/app/**/*.+(ts|html)' },
    ],
    reporters: ['progress', 'coverage', 'kjhtml'],
    preprocessors: {
       'src/**/*.js': ['coverage']
    },
    webpack: webpackConfig,
    webpackServer: { noInfo: true },
    coverageReporter: {
      includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
    },
    htmlReporter: {
      outputDir: 'testcases',
    },
    /*     coverageIstanbulReporter: {
          reports: ['html', 'lcovonly'],
          fixWebpackSourcePaths: true,
          type : 'text',
          dir : 'coverage/',
          file : 'coverage.txt'
        }, */
    angularCli: {
      environment: 'dev'
    },
    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222'],
        debug: true
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS',
      'Chrome'],
    singleRun: false
  });
};
