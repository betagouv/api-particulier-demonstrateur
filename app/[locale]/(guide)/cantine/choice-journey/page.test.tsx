import { render, fireEvent } from '@testing-library/react';

import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
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
    const button1Element = getByText('button.withGoodStatus {}');
    const button2Element = getByText('button.withWrongStatus {}');

    expect(titleElement).toBeInTheDocument();
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
    expect(buttonElement.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });

  it('Button1', async () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('button.withGoodStatus {}');
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/aaa/verification?user=123&scope=qfMSA');
  });

  it('Button2', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('button.withWrongStatus {}');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/aaa/verification?user=123bis&scope=qfMSA');
  });
});
