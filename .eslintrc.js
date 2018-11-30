module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-property-newline': 'off',
    'no-new': 'off',
    'no-return-await': 'off',
    'camelcase': 'off',
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'vue/name-property-casing': 'off',
    'vue/html-self-closing': ['error', {
      'html': { 'normal': 'never' }
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/require-default-prop': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'never',
    'space-before-function-paren': 0,
    'vue/attribute-hyphenation': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
