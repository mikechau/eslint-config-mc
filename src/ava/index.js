'use strict';

var path = require('path');
var buildConfig = require('../util/buildConfig');

var avarc = require.resolve('./avarc');

module.exports = buildConfig(avarc);
