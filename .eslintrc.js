module.exports = {
  extends: ['eslint:recommended', 'standard'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    requireConfigFile: false
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  plugins: [],
  globals: {
    my: true,
    App: true,
    getApp: true,
    Page: true,
    Component: true,
    getCurrentPages: true
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-console': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
};
