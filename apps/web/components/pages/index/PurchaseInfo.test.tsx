import { render } from '@testing-library/react';
import PurchaseInfo from './PurchaseInfo';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue({
    rich: (key: any) => {
      return key;
    },
  }),
}));

describe('Header component', () => {
  it('should render with correct text', async () => {
    const { getByText } = render(<PurchaseInfo />);

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();
  });
});
