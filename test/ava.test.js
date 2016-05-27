'use strict';

var path = require('path');
var test = require('ava');
var omit = require('lodash/omit');

var avaConfig = require('./fixtures/eslint-config-ava');
var expectedOutput = omit(avaConfig, ['extends', 'globals']);

var getEslintConfig = require('./helpers/getEslintConfig');
var configPath = path.join(__dirname, '../ava.js');
var rawConfig = getEslintConfig(configPath);
var config = omit(rawConfig, ['extends', 'globals']);

test('matches expected eslint config', function(t) {
  t.plan(5);

  t.deepEqual(config.env, expectedOutput.env);
  t.deepEqual(config.rules, expectedOutput.rules);
  t.deepEqual(config.parserOptions, expectedOutput.parserOptions);
  t.deepEqual(config.plugins, expectedOutput.plugins);

  t.deepEqual(config, expectedOutput);
});
