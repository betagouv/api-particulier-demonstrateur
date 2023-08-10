import { render } from '@testing-library/react';
import Index from './page';

describe('Index component', () => {
  it('should have correct number of components', async () => {
    const { container } = render(<Index />);

    const cardElement = container.querySelectorAll('.fr-card');
    const badgeElements = container.querySelectorAll('.fr-badge');

    expect(cardElement.length).toBe(4);
    expect(badgeElements.length).toBe(6);
  });
});
