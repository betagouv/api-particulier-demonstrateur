import { render, fireEvent } from '@testing-library/react';
import Page from './page';
import { useJourney } from '@/app/journey-provider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
  useSearchParams: () => ({ get: jest.fn().mockReturnValue(null) }),
}));

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'aaa',
    user: {
      id: '4',
      firstName: 'Kevin',
      lastName: 'Durand',
      isFranceConnectAuth: false,
    },
  },
}));

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('routes to upload when the validated example fill values are submitted', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText, getAllByText } = render(<Page />);

    fireEvent.click(getAllByText('Remplir')[0]);
    fireEvent.click(getByText('button'));

    expect(pushMock).toHaveBeenCalledWith('/aaa/upload?user=4');
  });

  it('routes to the error page when the erroneous example fill values are submitted', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText, getAllByText } = render(<Page />);

    fireEvent.click(getAllByText('Remplir')[1]);
    fireEvent.click(getByText('button'));

    expect(pushMock).toHaveBeenCalledWith('/aaa/verification/erreur?user=4');
  });
});
