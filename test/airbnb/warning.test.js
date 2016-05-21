'use strict';

var test = require('ava');
var config = require('../../src/airbnb/warningConfig');
var expectedOutput = require('../fixtures/airbnb-warning-eslint-config');

test('returns expected eslint config', function(t) {
  t.deepEqual(config, expectedOutput);
});

