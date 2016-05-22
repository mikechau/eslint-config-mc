#!/usr/bin/env node

'use strict';

var config = require('../src/airbnb');

var type = process.argv.slice(2)[0];

var json = JSON.stringify(config[type], null, 2);

console.log(json);
