#!/usr/bin/env node

'use strict';

var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

['airbnb'].forEach(function(configName) {

  var config = require('../src/' + configName);

  var dir = path.join(__dirname, '../dist/' + configName);

  mkdirp.sync(dir, function(err) {
    if (err) { throw err; }
    console.log('----> Creating dir for ' + configName + '...');
  });

  Object.keys(config).forEach(function(key) {
    console.log('----> Creating config for ' + configName + '/' + key + '...');

    var json = JSON.stringify(config[key], null, 2);

    var filePath = path.join(__dirname, '../dist/' + configName + '/' + key + '.json');

    fs.writeFile(filePath, json, function(err) {
      if (err) { throw err; }
      console.log('----> Saved ' + configName + '/' + key + '!');
    })
  });
});
