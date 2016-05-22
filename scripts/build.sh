#!/bin/bash

set -x

mkdir -p ./dist/airbnb

./util/airbnb-output.js config > ./dist/airbnb/config.json
./util/airbnb-output.js warningConfig > ./dist/airbnb/warningConfig.json
