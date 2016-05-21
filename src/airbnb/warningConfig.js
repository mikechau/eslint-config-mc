'use strict';

var config = require('./config');

var template = JSON
  .stringify(config, null, 2)
  .replace(/(:\s)(2)/g, '$11')
  .replace(/(":\s\[\n)(\s+)(2)/g, '$1$21');

var warningConfig = JSON.parse(template);

module.exports = warningConfig;

