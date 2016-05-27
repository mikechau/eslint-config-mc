'use strict';

var buildConfig = require('../util/buildConfig');
var airbnbrc = require.resolve('./airbnbrc');

module.exports = buildConfig(airbnbrc, { warning: true });
