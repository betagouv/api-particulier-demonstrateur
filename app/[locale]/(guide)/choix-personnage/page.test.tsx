import Page from './page';
import Tooltip from '@/components/Tooltip';
import { renderWithProvider, fireEvent } from '@/utils/test.utils';

jest.mock('@/components/Tooltip');

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: jest.fn() }),
}));

describe('Page component', () => {
  it('should have correct number of components', async () => {
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('1') });
    const { container, getByText } = renderWithProvider(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');
    const linkElements = container.querySelectorAll('a[href="/souscription"]');

    const titleCard1 = getByText('cards.henri.title');
    expect(titleCard1).toBeInTheDocument();
    const titleCard2 = getByText('cards.juliette.title');
    expect(titleCard2).toBeInTheDocument();

    expect(linkElements.length).toBe(2);
    expect(cardElement.length).toBe(2);
    expect(tagElements.length).toBe(3);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });

  it('should call setJourney with correct data when a Card is clicked with usage = 1', () => {
    const expectedJourneys = [
      {
        name: 'Henry',
        type: 'transport',
        description: null,
        isFranceConnectAuth: null,
      },
      {
        name: 'Juliette',
        type: 'transport',
        description: null,
        isFranceConnectAuth: null,
      },
    ];
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('1') });

    const { getAllByRole } = renderWithProvider(<Page />);

    const cardElement = getAllByRole('button');

    cardElement.forEach((button, index) => {
      fireEvent.click(button);
      const storedJourney = JSON.parse(localStorage.getItem('user-journey') || '');
      expect(storedJourney).toEqual(expectedJourneys[index]);
    });
  });

  it('should call setJourney with correct data when a Card is clicked with usage = 2', () => {
    const expectedJourneys = [
      {
        name: 'Camille',
        type: 'canteen',
        description: null,
        isFranceConnectAuth: null,
      },
      {
        name: 'Kevin',
        type: 'canteen',
        description: null,
        isFranceConnectAuth: null,
      },
    ];
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('2') });

    const { getAllByRole } = renderWithProvider(<Page />);

    const cardElement = getAllByRole('button');

    cardElement.forEach((button, index) => {
      fireEvent.click(button);
      const storedJourney = JSON.parse(localStorage.getItem('user-journey') || '');
      expect(storedJourney).toEqual(expectedJourneys[index]);
    });
  });

  it('should preserve journey data in local storage when page is refreshed', () => {
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('1') });

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
