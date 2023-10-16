import { render } from '@testing-library/react';
import CardUnitedPricing from './CardUnitedPricing';

describe('CardSocialPricing component', () => {
  it('should render components correctly', async () => {
    const { container } = render(<CardUnitedPricing />);

    const cardElement = container.querySelector('.fr-card');

    expect(cardElement).toHaveClass('fr-card');
  });
});
