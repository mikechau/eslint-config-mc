# eslint-config-mc

Based on [eslint-airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). Provides a statically built eslint config file in the `dist` dir.

## Installing

```bash
npm install --save-dev eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint

npm install --save-dev eslint-config-mc
```

## Usage

### eslint-config-mc

This is the default config, which will raise errors for violations.

Edit your `.eslintrc.*` and add `"extends": "eslint-config-mc"`.

### eslint-config-mc/warning

This is the same config, but instead of raising errors, it will raise warnings.

Edit your `.eslintrc.*` and add `"extends": "eslint-config-mc/warning"`.

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
