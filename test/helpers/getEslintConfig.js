'use strict';

var path = require('path');
var CLIEngine = require('eslint').CLIEngine;

module.exports = function getEslintConfig(configPath) {
  var cli = new CLIEngine({
    configFile: configPath,
    useEslintrc: false
  });

  var config = cli.getConfigForFile(path.join(__dirname, '../../src/dummy.js'));

  if (config.parser === '') {
    delete config.parser;
  }

  return config;
};
