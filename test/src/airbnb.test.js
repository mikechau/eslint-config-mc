'use strict';

var test = require('ava');
var omit = require('lodash/omit');

var config = require('../../src/airbnb');
var baseFixture = require('../fixtures/eslint-config-airbnb');
var warningFixture = require('../fixtures/eslint-config-airbnb-warning');

test('base config matches expected eslint config', function(t) {
  t.plan(7);

  var expectedOutput = omit(baseFixture, ['extends', 'globals']);

  t.deepEqual(config.base.env, expectedOutput.env);
  t.deepEqual(config.base.rules, expectedOutput.rules);
  t.deepEqual(config.base.parserOptions, expectedOutput.parserOptions);
  t.deepEqual(config.base.plugins, expectedOutput.plugins);
  t.deepEqual(config.base.settings, expectedOutput.settings);
  t.deepEqual(config.base.ecmaFeatures, expectedOutput.ecmaFeatures);

  t.deepEqual(config.base, expectedOutput);
});

test('warning config matches expected eslint config', function(t) {
  t.plan(7);

  var expectedOutput = omit(warningFixture, ['extends', 'globals']);

  t.deepEqual(config.warning.env, expectedOutput.env);
  t.deepEqual(config.warning.rules, expectedOutput.rules);
  t.deepEqual(config.warning.parserOptions, expectedOutput.parserOptions);
  t.deepEqual(config.warning.plugins, expectedOutput.plugins);
  t.deepEqual(config.warning.settings, expectedOutput.settings);
  t.deepEqual(config.warning.ecmaFeatures, expectedOutput.ecmaFeatures);

  t.deepEqual(config.warning, expectedOutput);
});
