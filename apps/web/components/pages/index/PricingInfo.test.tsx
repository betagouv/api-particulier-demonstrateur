import { render } from '@testing-library/react';
import PricingInfo from './PricingInfo';

describe('PricingInfo component', () => {
  it('should render Highlight composant', async () => {
    const { container } = render(<PricingInfo />);

    const highlightElement = container.querySelector('.fr-highlight');

    expect(highlightElement).not.toBeNull();
  });

  it('should render with correct text', async () => {
    const { getByText } = render(<PricingInfo />);

    const titleElement = getByText('content.title');

    expect(titleElement).toBeInTheDocument();
  });
});
