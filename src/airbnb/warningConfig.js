'use strict';

var config = require('./config');
var warnitizer = require('../util/warnitizer');

var warningConfig = warnitizer(config);

module.exports = warningConfig;
