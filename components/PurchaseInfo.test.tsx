import { render } from '@testing-library/react';
import PurchaseInfo from './PurchaseInfo';

describe('PurchaseInfo component', () => {
  it('should render with correct text', async () => {
    const { getByText } = render(<PurchaseInfo title={'Yoloo'} />);

    const titleElement = getByText('Yoloo');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render with undefined text', async () => {
    const { container } = render(<PurchaseInfo />);
    const h1Element = container.querySelector('h1');
    expect(h1Element).toBeInTheDocument();
    expect(h1Element!.textContent!.trim()).toBe('');
  });

  it('should render with specific style', async () => {
    const { container } = render(<PurchaseInfo title={'Yoloo'} style={{ backgroundColor: 'red' }} />);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'red',
    });
  });
});
