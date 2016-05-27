'use strict';

var buildConfig = require('../util/buildConfig');
var avarc = require.resolve('./avarc');

module.exports = buildConfig(avarc);
