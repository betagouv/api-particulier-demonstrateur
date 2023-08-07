import { render } from '@testing-library/react';
import PurchaseInfo from './PurchaseInfo';

describe('PurchaseInfo component', () => {
  it('should render with correct text', async () => {
    const { getByText } = render(<PurchaseInfo />);

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();
  });
});
