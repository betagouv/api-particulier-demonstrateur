import { render } from '@testing-library/react';
import Page from './page';

describe('Page component', () => {
  it('should have correct number of components', async () => {
    const { container } = render(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const badgeElements = container.querySelectorAll('.fr-badge');
    const linkElements = container.querySelectorAll('a[href="/souscription"]');

    expect(linkElements.length).toBe(4);
    expect(cardElement.length).toBe(4);
    expect(badgeElements.length).toBe(6);
  });
});
