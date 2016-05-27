'use strict';

var omit = require('lodash/omit');
var merge = require('lodash/merge');
var getEslintConfig = require('./getEslintConfig');
var warnitizer = require('./warnitizer');

module.exports = function buildConfig(configModule, params, configParams) {
  var opts = params || {};
  var withWarning = (opts.warning === undefined) ? false : opts.warning;

  var configOpts = configParams || {};

  var rawConfig = getEslintConfig(configModule);
  var config = omit(rawConfig, ['extends', 'globals']);

  var initialResults = {
    base: config
  };

  if (withWarning) {
    initialResults.warning = warnitizer(config);
  }

  return (
    Object.keys(initialResults).reduce(function mergeConfig(obj, key) {
      var eslintConfig = {};
      eslintConfig[key] = merge({}, initialResults[key], configOpts);

      return merge({}, obj, eslintConfig);
    }, {})
  );
};
