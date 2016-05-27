'use strict';

var omit = require('lodash/omit');
var getEslintConfig = require('./getEslintConfig');
var warnitizer = require('./warnitizer');

module.exports = function buildConfig(configModule) {
  var rawConfig = getEslintConfig(configModule);
  var config = omit(rawConfig, 'extends');

  return {
    base: config,
    warning: warnitizer(config)
  };
};
