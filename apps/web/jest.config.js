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
  collectCoverageFrom: [...configuration.collectCoverageFrom],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configure
    // for you soon)
    '^@/i18n/(.*)$': '<rootDir>/app/i18n/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can
// load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
