#!/bin/bash

set -x

./node_modules/.bin/eslint -c ./node_modules/eslint-config-airbnb/index.js index.js --print-config > ./test/fixtures/eslint-config-airbnb.json
./node_modules/.bin/eslint -c ./node_modules/eslint-config-airbnb/index.js --print-config warning.js | cat | sed -r 's/(:\s)(2)/\11/g' | sed -z -r 's/(":\s\[\n)(\s+)(2)/\1\21/g' > ./test/fixtures/eslint-config-airbnb-warning.json
