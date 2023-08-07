import { render } from '@testing-library/react';
import SubscriptionInfo from './SubscriptionInfo';

describe('SubscriptionInfo component', () => {
  it('should render Highlight composant', async () => {
    const { container } = render(<SubscriptionInfo />);

    const highlightElement = container.querySelector('.fr-highlight');

    expect(highlightElement).not.toBeNull();
    expect(highlightElement).toHaveClass('fr-highlight');
  });

  it('should render text correctly', async () => {
    const { getByText } = render(<SubscriptionInfo />);

    const titleElement = getByText('title');

    expect(titleElement).toBeInTheDocument();
  });
});
