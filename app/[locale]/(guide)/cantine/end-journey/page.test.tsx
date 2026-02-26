import { render, fireEvent } from '@testing-library/react';
import { useJourney } from '@/app/journey-provider';

import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

jest.mock('@/components/Tooltip');

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'aaa',
    user: { id: '123', firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
  },
}));

describe('Page component', () => {
  it('should calls correct components', async () => {
    const { container, getByText } = render(<Page />);

    const buttonElement = container.querySelectorAll('.fr-btn');

    const titleElement = getByText('title');
    const button1Element = getByText('button1.cantine.withWrongStatus {"user":"John"}');
    const button2Element = getByText('button2');

    expect(titleElement).toBeInTheDocument();
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
    expect(buttonElement.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });

  it('Button1 with wrong status', async () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('button1.cantine.withWrongStatus {"user":"John"}');
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/verification?user=123bis&scope=qfMSA');
  });

  it('Button1 with good status', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'aaa',
        user: { id: '123bis', firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
      },
    }));
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('button1.cantine.withGoodStatus {"user":"John"}');
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/verification?user=123&scope=qfMSA');
  });

  it('Button1 with undefined firstName and wrong status', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'aaa',
        user: { id: '123', lastName: 'Doe', description: '', isFranceConnectAuth: false },
      },
    }));

    const { getByText } = render(<Page />);
    const button = getByText('button1.cantine.withWrongStatus {"user":""}');
    expect(button).toBeInTheDocument();
  });

  it('Button1 with undefined firstName and good status', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'aaa',
        user: { id: '123bis', lastName: 'Doe', description: '', isFranceConnectAuth: false },
      },
    }));

    const { getByText } = render(<Page />);
    const button = getByText('button1.cantine.withGoodStatus {"user":""}');
    expect(button).toBeInTheDocument();
  });

  it('Button2', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('button2');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/');
  });
});
