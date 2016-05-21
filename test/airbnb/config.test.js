'use strict';

var test = require('ava');
var config = require('../../src/airbnb/config');
var expectedOutput = require('../fixtures/airbnb-eslint-config');

test('returns expected eslint config', function(t) {
  t.deepEqual(config, expectedOutput);
});

