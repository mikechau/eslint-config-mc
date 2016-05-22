'use strict';

var path = require('path');
var _ = require('lodash');
var CLIEngine = require('eslint').CLIEngine;

var cli = new CLIEngine({
  configFile: require.resolve('eslint-config-airbnb'),
  useEslintrc: false
});

var rawConfig = cli.getConfigForFile(path.join(__dirname, '../dummy.js'));

var config = _.omit(rawConfig, 'extends');

if (config.parser === '') {
  delete config.parser;
}

module.exports = config;
