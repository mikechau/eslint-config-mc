'use strict';

module.exports = {
  env: {
    mocha: true
  },

  plugins: [
    'mocha'
  ],

  rules: {
    'mocha/no-exclusive-tests': 1,
    'mocha/no-skipped-tests': 1,
    'mocha/no-pending-tests': 1,
    'mocha/handle-done-callback': 1,
    'mocha/no-synchronous-tests': 0,
    'mocha/no-global-tests': 1
  }
};
