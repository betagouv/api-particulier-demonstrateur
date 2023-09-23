import '@testing-library/jest-dom/extend-expect';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    const t = (key) => key;
    t.rich = (key, vars) => {
      return vars ? `${key} ${JSON.stringify(vars)}` : key;
    };

    return t;
  },
}));

afterEach(() => {
  jest.clearAllMocks();
});
