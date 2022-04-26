module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
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
