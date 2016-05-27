'use strict';

var path = require('path');
var test = require('ava');
var omit = require('lodash/omit');

var es5Config = require('./fixtures/eslint-config-es5');
var expectedOutput = omit(es5Config, 'extends');

var getEslintConfig = require('./helpers/getEslintConfig');
var configPath = path.join(__dirname, '../es5.js');
var rawConfig = getEslintConfig(configPath);
var config = omit(rawConfig, 'extends');

test('matches expected eslint config', function(t) {
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
