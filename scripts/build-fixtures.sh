#!/bin/bash

set -x

./node_modules/.bin/eslint -c ./node_modules/eslint-config-airbnb/index.js index.js --print-config --no-eslintrc > ./test/fixtures/eslint-config-airbnb.json
./node_modules/.bin/eslint -c ./node_modules/eslint-config-airbnb/index.js --print-config --no-eslintrc warning.js | cat | sed -r 's/(:\s)(2)/\11/g' | sed -z -r 's/(":\s\[\n)(\s+)(2)/\1\21/g' > ./test/fixtures/eslint-config-airbnb-warning.json

./node_modules/.bin/eslint -c ./src/ava/avarc.js index.js --print-config --no-eslintrc > ./test/fixtures/eslint-config-ava.json
