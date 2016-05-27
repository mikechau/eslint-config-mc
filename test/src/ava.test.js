'use strict';

var test = require('ava');
var omit = require('lodash/omit');

var config = require('../../src/ava');
var baseFixture = require('../fixtures/eslint-config-ava');

test('base config matches expected eslint config', function(t) {
  t.plan(8);

  var expectedOutput = omit(baseFixture, 'extends');

  t.deepEqual(config.base.globals, expectedOutput.globals);
  t.deepEqual(config.base.env, expectedOutput.env);
  t.deepEqual(config.base.rules, expectedOutput.rules);
  t.deepEqual(config.base.parserOptions, expectedOutput.parserOptions);
  t.deepEqual(config.base.plugins, expectedOutput.plugins);
  t.deepEqual(config.base.settings, expectedOutput.settings);
  t.deepEqual(config.base.ecmaFeatures, expectedOutput.ecmaFeatures);

  t.deepEqual(config.base, expectedOutput);
});
