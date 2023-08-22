import { render } from '@testing-library/react';
import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('@/components/Tooltip');

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: jest.fn() }),
}));

describe('Page component', () => {
  it('should have correct number of components', async () => {
    const { container, getByText } = render(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');
    const linkElements = container.querySelectorAll('a[href="/souscription"]');

    const titleCard1 = getByText('cards.camille.title');
    expect(titleCard1).toBeInTheDocument();
    const titleCard2 = getByText('cards.kevin.title');
    expect(titleCard2).toBeInTheDocument();

    expect(linkElements.length).toBe(2);
    expect(cardElement.length).toBe(2);
    expect(tagElements.length).toBe(3);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
  it('should have correct number of components', async () => {
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('1') });
    const { container, getByText } = render(<Page />);

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
});
