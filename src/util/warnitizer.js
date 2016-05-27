'use strict';

module.exports = function warnitizer(config) {
  var template = JSON.stringify(config, null, 2)
    .replace(/(:\s)(2)/g, '$11')
    .replace(/(":\s\[\n)(\s+)(2)/g, '$1$21');

  return JSON.parse(template);
};
