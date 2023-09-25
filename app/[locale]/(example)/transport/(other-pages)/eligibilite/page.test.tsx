import { render, fireEvent } from '@testing-library/react';
import Page from './page';
import { useJourney } from '@/app/journey-provider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
  useSearchParams: () => ({ get: jest.fn() }),
}));

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'aaa',
    user: {
      id: '1',
    },
  },
}));

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should render page', async () => {
    const { container } = render(<Page />);

    const stepperElement = container.querySelector('.fr-stepper');
    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelector('.fr-alert');
    const cardElement = container.querySelector('.fr-card');

    expect(stepperElement).toHaveClass('fr-stepper');
    expect(buttonElement).toHaveClass('fr-btn');
    expect(alertElement).toHaveClass('fr-alert');
    expect(cardElement).toHaveClass('fr-card');
  });

  it('Button click', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue(undefined) });

    const { getByText, getByLabelText } = render(<Page />);

    const button = getByText('button');

    const labelRadio1 = getByLabelText('checkboxLabel1');
    const labelRadio2 = getByLabelText('checkboxLabel2');
    const labelRadio3 = getByLabelText('checkboxLabel3');
    const labelRadio4 = getByLabelText('checkboxLabel4');
    const labelRadio5 = getByLabelText('checkboxLabel5');

    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=1&scope=jobSeeker');

    fireEvent.click(labelRadio2);
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=1&scope=jobSeeker');

    fireEvent.click(labelRadio3);
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=1&scope=studentScholarship');

    fireEvent.click(labelRadio4);
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=1&scope=studentScholarship');

    fireEvent.click(labelRadio5);
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=1&scope=studentScholarship');

    fireEvent.click(labelRadio1);
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=1&scope=jobSeeker');
  });

  it('Button click with scope setted in url', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('student') });

    const { getByText } = render(<Page />);

    const button = getByText('button');

    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=1&scope=student');
  });

  it('Button click with user 2', async () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });
    const useSearchParamsMock = jest.spyOn(require('next/navigation'), 'useSearchParams');
    useSearchParamsMock.mockReturnValue({ get: jest.fn().mockReturnValue('2') });
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'aaa',
        user: {
          id: '2',
        },
      },
    }));

    const { getByText } = render(<Page />);
    const button = getByText('button');
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=2&scope=student');
  });
});
