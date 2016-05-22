'use strict';

var test = require('ava');
var _ = require('lodash');

var config = require('../../src/airbnb/config');
var airbnbConfig = require('../fixtures/eslint-config-airbnb');

var expectedOutput = _.omit(airbnbConfig, 'extends');

test('returns expected eslint config', function(t) {
  t.plan(8);

  t.deepEqual(config.globals, expectedOutput.globals);
  t.deepEqual(config.env, expectedOutput.env);
  t.deepEqual(config.rules, expectedOutput.rules);
  t.deepEqual(config.parserOptions, expectedOutput.parserOptions);
  t.deepEqual(config.plugins, expectedOutput.plugins);
  t.deepEqual(config.settings, expectedOutput.settings);
  t.deepEqual(config.ecmaFeatures, expectedOutput.ecmaFeatures);

  t.deepEqual(config, expectedOutput);
});
