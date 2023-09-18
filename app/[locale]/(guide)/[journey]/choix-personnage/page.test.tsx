import Page from './page';
import Tooltip from '@/components/Tooltip';
import { render } from '@testing-library/react';
import { useJourney } from '@/app/journey-provider';

jest.mock('@/components/Tooltip');

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: jest.fn() }),
}));

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'transport',
    user: null,
  },
}));

describe('Page component', () => {
  it('should have no users on page when journey is not setted', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: null,
        user: null,
      },
    }));
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('1') });
    const { container } = render(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');

    expect(cardElement.length).toBe(0);
    expect(tagElements.length).toBe(0);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
  it('should have correct users on transport page', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'transport',
        user: null,
      },
    }));
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('1') });
    const { container, getByText, getByRole } = render(<Page />);

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
  it('should have correct users on cantine page', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'cantine',
        user: null,
      },
    }));
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('1') });
    const { container, getByText, getByRole } = render(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');

    const titleCard1 = getByText('cards.user3.title');
    expect(titleCard1).toBeInTheDocument();
    const user1Link = getByRole('link', { name: /cards.user3.title/i });
    expect(user1Link).toBeInTheDocument();
    const titleCard2 = getByText('cards.user4.title');
    expect(titleCard2).toBeInTheDocument();
    const user2Link = getByRole('link', { name: /cards.user4.title/i });
    expect(user2Link).toBeInTheDocument();

    expect(cardElement.length).toBe(2);
    expect(tagElements.length).toBe(3);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
