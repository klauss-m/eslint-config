module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
  ],
  plugins: ['jest'],
  env: {
    node: true,
    jest: true,
  },
  settings: {
    jest: {
      version: 'latest',
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
  },
}
