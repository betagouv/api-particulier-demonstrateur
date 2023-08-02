import { render } from '@testing-library/react';
import Header from './Header';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue({
    rich: (key: any) => {
      return key;
    },
  }),
}));

describe('Header component', () => {
  it('should render with correct text', async () => {
    const { getByText } = render(<Header />);

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();
  });
});
