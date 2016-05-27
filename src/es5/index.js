'use strict';

var buildConfig = require('../util/buildConfig');
var es5rc = require.resolve('./es5rc');

module.exports = buildConfig(es5rc, { warning: true });
