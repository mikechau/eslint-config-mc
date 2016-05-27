# eslint-config-mc

[![npm version](https://badge.fury.io/js/eslint-config-mc.svg)](https://badge.fury.io/js/eslint-config-mc) [![Build Status](https://travis-ci.org/mikechau/eslint-config-mc.svg?branch=master)](https://travis-ci.org/mikechau/eslint-config-mc) [![Dependency Status](https://david-dm.org/mikechau/eslint-config-mc.svg)](https://david-dm.org/mikechau/eslint-config-mc) [![devDependency Status](https://david-dm.org/mikechau/eslint-config-mc/dev-status.svg)](https://david-dm.org/mikechau/eslint-config-mc#info=devDependencies)

Based on [eslint-airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). Provides a statically built eslint config file in the `dist` dir.

## Installing

```bash
# Required dependencies
npm install --save-dev eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint

# Optional dependencies
npm install --save-dev eslint-plugin-ava

# Install
npm install --save-dev eslint-config-mc
```

## Usage

### Configs

- `eslint-config-mc` - The default config, raises errors for violations.
- `eslint-config-mc/warning` - The default config, but will raise warnings instead of errors.
- `eslint-config-mc/es5` - Linting for es5 only, raises errors.
- `eslint-config-mc/es5-warning` - Linting for es5 only, raises warnings.
- `eslint-config-mc/ava` - AVA config, raises errors.

Edit your `.eslintrc.*` and extend from the appropriate config.

Example:

```javascript
// .eslintrc.json
{
  "extends": "eslint-config-mc"
}
```

## Development

```bash
git clone git@github.com:mikechau/eslint-config-mc.git
cd eslint-config-mc && npm install
```

## Testing

```bash
npm test
```

## LICENSE

MIT
