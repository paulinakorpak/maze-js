module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'default-case': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
  },
};
