import { render } from '@testing-library/react';
import PurchaseInfo from './PurchaseInfo';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    const t = (key: string) => key;
    t.rich = (key: string, replacements: { br: Function }) => {
      if (replacements && replacements.br) {
        replacements.br();
      }
      return key;
    };
    return t;
  },
}));

describe('PurchaseInfo component', () => {
  it('should render with correct text', async () => {
    const { getByText } = render(<PurchaseInfo />);

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();
  });
});
