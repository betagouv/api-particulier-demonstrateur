import js from '@eslint/js';
import nextConfig from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

const config = [
  js.configs.recommended,
  ...nextConfig,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.jest,
        JSX: 'readonly',
      },
    },
    settings: {
      next: {
        rootDir: ['app/*/'],
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      quotes: ['error', 'single'],
      indent: ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true }],
      'max-len': 'off',
      'no-tabs': ['error'],
      semi: ['error', 'always'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];

export default config;
