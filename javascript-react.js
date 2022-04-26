module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
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
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
  },
}
