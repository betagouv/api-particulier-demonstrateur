import '@testing-library/jest-dom/extend-expect';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    const t = (key) => key;
    t.rich = (key, replacements) => {
      if (replacements && replacements.br) {
        replacements.br();
      }
      return key;
    };
    return t;
  },
}));

afterEach(() => {
  jest.clearAllMocks();
});
