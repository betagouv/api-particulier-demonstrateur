import { render } from '@testing-library/react';
import CardSocialPricing from './CardSocialPricing';

describe('CardSocialPricing component', () => {
  it('should render components correctly', async () => {
    const { container } = render(<CardSocialPricing />);

    const cardElement = container.querySelector('.fr-card');

    expect(cardElement).toHaveClass('fr-card');
  });
});
