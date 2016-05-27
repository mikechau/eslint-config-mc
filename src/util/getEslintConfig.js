'use strict';

var path = require('path');
var CLIEngine = require('eslint').CLIEngine;

module.exports = function getEslintConfig(configModule) {
  var cli = new CLIEngine({
    configFile: require.resolve(configModule),
    useEslintrc: false
  });

  var config = cli.getConfigForFile(path.join(__dirname, '../dummy.js'));

  if (config.parser === '') {
    delete config.parser;
  }

  return config;
};
