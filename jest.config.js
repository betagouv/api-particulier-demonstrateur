const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  // in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  preset: 'ts-jest',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    '**/*.tsx',
    '**/*.ts',
    '!**/index.tsx',
    '!**/index.ts',
    '!**/*.test.tsx',
    '!**/StartDsfr.tsx',
    '!**/layout.tsx',
    '!**/defaultColorScheme.ts',
    '!**/middleware.ts',
    '!**/i18n-config.ts',
    '!**/.next/**',
    '!**/.history/**',
    '!**/journey-provider.tsx/**',
    '!**/users.ts/**',
    '!**/components/CustomButton.tsx/**',
    '!**/components/Tips.tsx/**',
    '!**/components/ToggleButton.tsx/**',
    '!**/components/Tooltip.tsx/**',
    '!**/components/Status.tsx/**',
    '!**/verification/page.tsx/**',
    '!**/verification/page.tsx/**',
    '!**/connexion/page.tsx/**',
    '!**/formulaire/page.tsx/**',
    '!**/verification/upload/page.tsx/**',
    '!**/verification/upload/erreur/page.tsx/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/services/(.*)$': '<rootDir>/services/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can
// load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
