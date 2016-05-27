'use strict';

var path = require('path');
var test = require('ava');
var omit = require('lodash/omit');

var avaConfig = require('./fixtures/eslint-config-ava');
var expectedOutput = omit(avaConfig, 'extends');

var getEslintConfig = require('./helpers/getEslintConfig');
var configPath = path.join(__dirname, '../ava.js');
var rawConfig = getEslintConfig(configPath);
var config = omit(rawConfig, 'extends');

test('matches expected eslint config', function(t) {
  t.plan(6);

  t.deepEqual(config.globals, expectedOutput.globals);
  t.deepEqual(config.env, expectedOutput.env);
  t.deepEqual(config.rules, expectedOutput.rules);
  t.deepEqual(config.parserOptions, expectedOutput.parserOptions);
  t.deepEqual(config.plugins, expectedOutput.plugins);

  t.deepEqual(config, expectedOutput);
});