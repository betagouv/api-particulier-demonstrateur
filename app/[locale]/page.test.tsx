import { renderWithProvider, fireEvent } from '@/utils/test.utils';
import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  const expectedJourneys = [
    {
      type: 'transport',
    },
    {
      type: 'canteen',
    },
  ];

  it('should have correct number of components', async () => {
    const { container } = renderWithProvider(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');
    const link1 = container.querySelectorAll('a[href="/choix-personnage?usage=1"]');
    const link2 = container.querySelectorAll('a[href="/choix-personnage?usage=2"]');

    expect(link1.length).toBe(1);
    expect(link2.length).toBe(1);
    expect(cardElement.length).toBe(2);
    expect(tagElements.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(2);
  });

  it('should call setJourney with correct data when a Card is clicked', () => {
    const { getAllByRole } = renderWithProvider(<Page />);

    const cardElement = getAllByRole('button');

    cardElement.forEach((button, index) => {
      fireEvent.click(button);
      const storedJourney = JSON.parse(localStorage.getItem('user-journey') || '');
      expect(storedJourney).toEqual(expectedJourneys[index]);
    });
  });

  it('should preserve journey data in local storage when page is refreshed', () => {
    const { getAllByRole, unmount } = renderWithProvider(<Page />);

    const cardElement = getAllByRole('button')[0];
    fireEvent.click(cardElement);

    const expectedStoredJourney = JSON.parse(localStorage.getItem('user-journey') || '');

    unmount();

    renderWithProvider(<Page />);

    const actualStoredJourney = JSON.parse(localStorage.getItem('user-journey') || '');

    expect(actualStoredJourney).toEqual(expectedStoredJourney);
  });
});
