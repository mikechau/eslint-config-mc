'use strict';

var _ = require('lodash');

// Base
var bestPractices = require('eslint-config-airbnb-base/rules/best-practices');
var errors = require('eslint-config-airbnb-base/rules/errors');
var legacy = require('eslint-config-airbnb-base/rules/legacy');
var node = require('eslint-config-airbnb-base/rules/node');
var style = require('eslint-config-airbnb-base/rules/style');
var variables = require('eslint-config-airbnb-base/rules/variables');
var es6 = require('eslint-config-airbnb-base/rules/es6');

// React
var strict = require('eslint-config-airbnb-base/rules/strict');
var react = require('eslint-config-airbnb/rules/react');
var react_a11y = require('eslint-config-airbnb/rules/react-a11y'); // eslint-disable-line camelcase

// Configs
var baseConfig = _.omit(require('eslint-config-airbnb-base'), 'extends');
var reactConfig = _.omit(require('eslint-config-airbnb'), 'extends');

var config = _.merge(
  {},
  bestPractices,
  errors,
  legacy,
  node,
  style,
  variables,
  es6,
  strict,
  react,
  react_a11y, // eslint-disable-line camelcase
  baseConfig,
  reactConfig
);

module.exports = config;
