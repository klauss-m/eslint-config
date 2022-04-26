# @klauss-m/prettier-config

## Why?

I want to have an easy access to all my configurations.

## Installation and configuration

### Typescript without react:

- Install:

```bash
yarn add eslint @klauss-m/eslint-config @typescript-eslint/eslint-plugin  @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jest -D
```

- Extend:

You need to set this on your eslint config:

```json

{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": [
    "@klauss-m/eslint-config/typescript"
  ]
}
```

### Typescript with react:

- Install:

```bash
yarn add eslint @klauss-m/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jest -D
```

- Extend:

You need to set this on your eslint config:

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": [
    "@klauss-m/eslint-config/typescript-react"
  ]
}
```

### Javascript without react:

- Install:

```bash
yarn add eslint @klauss-m/eslint-config @babel/core @babel/eslint-parser @babel/preset-env eslint-config-airbnb-base eslint-config-prettier eslint-plugin-jest eslint-plugin-import -D
```

- Extends:

You need to set this on your eslint config:

```json
{
  "root": true,
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": [
        "@babel/preset-env"
      ]
    }
  },
  "extends": [
    "@klauss-m/eslint-config/javascript"
  ]
}
```

You need to have a `.babelrc.json` on your root with this:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ]
}
```

### Javascript with react:

- Install:

```bash
yarn add eslint @klauss-m/eslint-config @babel/core @babel/eslint-parser @babel/preset-env eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jest -D
```

- Extend:

you need to set this on your eslint config:

```json
{
  "root": true,
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": [
        "@babel/preset-env"
      ]
    }
  },
  "extends": [
    "@klauss-m/eslint-config/javascript-react"
  ]
}
```

You need to have a `.babelrc.json` on your root with this:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ]
}
```
