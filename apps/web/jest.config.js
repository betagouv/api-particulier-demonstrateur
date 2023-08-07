const configuration = require('jest-config-custom');

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  // in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  ...configuration,
  collectCoverageFrom: [
    ...configuration.collectCoverageFrom,
    '!**/StartDsfr.tsx',
    '!**/layout.tsx',
    '!**/defaultColorScheme.ts',
    '!**/middleware.ts',
    '!**/i18n-config.ts',
    '!**/.next/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can
// load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
