import { render } from '@testing-library/react';
import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('@/components/Tooltip');

jest.mock('@/app/journey-provider', () => ({
  useJourney: () => ({
    setJourney: jest.fn(),
  }),
}));

describe('Page component', () => {
  it('should have correct number of components', async () => {
    const { container } = render(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');
    const link1 = container.querySelectorAll('a[href="/transport/choix-personnage"]');
    const link2 = container.querySelectorAll('a[href="/cantine/choix-personnage"]');

    expect(link1.length).toBe(1);
    expect(link2.length).toBe(1);
    expect(cardElement.length).toBe(2);
    expect(tagElements.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
