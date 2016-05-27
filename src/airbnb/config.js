'use strict';

var _ = require('lodash');

var getEslintConfig = require('../util/getEslintConfig');
var rawConfig = getEslintConfig('eslint-config-airbnb');
var config = _.omit(rawConfig, 'extends');

module.exports = config;
