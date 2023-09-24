import { render, fireEvent } from '@testing-library/react';

import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
  useSearchParams: () => ({ get: jest.fn() }),
}));

jest.mock('@/components/Tooltip');

jest.mock('@/app/journey-provider', () => ({
  useJourney: () => ({
    journey: {
      type: 'aaa',
      user: { id: '123', firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
    },
  }),
}));

describe('Page component', () => {
  it('should calls correct components', async () => {
    const { container, getByText } = render(<Page />);

    const buttonElement = container.querySelectorAll('.fr-btn');

    const titleElement = getByText('title');
    const button1Element = getByText('button1.transport.withGoodStatus');
    const button2Element = getByText('button2');

    expect(titleElement).toBeInTheDocument();
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
    expect(buttonElement.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });

  it('When result was good', async () => {
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('jobSeeker') });
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button1 = getByText('button1.transport.withWrongStatus');
    fireEvent.click(button1);
    expect(pushMock).toHaveBeenCalledWith('/aaa/eligibilite?user=123&scope=studentScholarship');

    const button2 = getByText('button2');
    fireEvent.click(button2);

    expect(pushMock).toHaveBeenCalledWith('/');
  });

  it('When result was wrong', async () => {
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('studentScholarship') });
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('button1.transport.withGoodStatus');
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/eligibilite?user=123&scope=jobSeeker');
  });
});
