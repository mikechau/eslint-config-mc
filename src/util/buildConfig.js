'use strict';

var omit = require('lodash/omit');
var getEslintConfig = require('./getEslintConfig');
var warnitizer = require('./warnitizer');

module.exports = function buildConfig(configModule, params) {
  var opts = params || {};
  var withWarning = (opts.warning === undefined) ? false : opts.warning;

  var rawConfig = getEslintConfig(configModule);
  var config = omit(rawConfig, ['extends', 'globals']);

  var results = {
    base: config
  };

  if (withWarning) {
    results.warning = warnitizer(config);
  }

  return results;
};
