module.exports = {
  extends: ['eslint:recommended', 'next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true }],
    'max-len': ['error', { code: 120 }],
    'no-tabs': ['error'],
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  env: {
    jest: true,
  },
};
