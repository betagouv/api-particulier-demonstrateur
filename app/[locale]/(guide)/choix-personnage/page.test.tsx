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
    const { container, getByText, getByRole } = renderWithProvider(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');

    const titleCard1 = getByText('cards.user1.title');
    expect(titleCard1).toBeInTheDocument();
    const user1Link = getByRole('link', { name: /cards.user1.title/i });
    expect(user1Link).toBeInTheDocument();
    const titleCard2 = getByText('cards.user2.title');
    expect(titleCard2).toBeInTheDocument();
    const user2Link = getByRole('link', { name: /cards.user2.title/i });
    expect(user2Link).toBeInTheDocument();

    expect(cardElement.length).toBe(2);
    expect(tagElements.length).toBe(3);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });

  it('should call setJourney with correct data when a Card is clicked with usage = 1', () => {
    const expectedJourneys = [
      {
        type: null,
        user: {
          // eslint-disable-next-line quotes
          description: "Henri, demandeur d'emploi",
          firstName: 'Henri',
          isFranceConnectAuth: true,
          lastName: 'Dupont',
        },
      },
      {
        type: null,
        user: {
          // eslint-disable-next-line quotes
          description: 'Juliette, étudiante',
          firstName: 'Juliette',
          isFranceConnectAuth: false,
          lastName: 'Lejeune',
        },
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
        type: null,
        user: {
          description: 'Camille, quotient familial MSA de 320',
          firstName: 'Camille',
          isFranceConnectAuth: true,
          lastName: 'Dubois',
        },
      },
      {
        type: null,
        user: {
          description: 'Kevin, quotient familial MSA de 750',
          firstName: 'Kevin',
          isFranceConnectAuth: false,
          lastName: 'Durand',
        },
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
