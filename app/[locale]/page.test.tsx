import { render } from '@testing-library/react';
import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should have correct number of components', async () => {
    const { container } = render(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');
    const linkElements = container.querySelectorAll('a[href="/souscription"]');

    expect(linkElements.length).toBe(4);
    expect(cardElement.length).toBe(4);
    expect(tagElements.length).toBe(6);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
