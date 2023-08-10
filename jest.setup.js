import '@testing-library/jest-dom/extend-expect';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    return (key) => key;
  },
}));

afterEach(() => {
  jest.clearAllMocks();
});
