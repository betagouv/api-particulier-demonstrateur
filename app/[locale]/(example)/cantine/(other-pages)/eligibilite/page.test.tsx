import { render, fireEvent } from '@testing-library/react';
import Page from './page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

jest.mock('@/app/journey-provider', () => ({
  useJourney: () => ({
    journey: {
      type: 'aaa',
      user: {
        id: '123',
      },
    },
  }),
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

    const { getByText } = render(<Page />);
    const button = getByText('button');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/aaa/connexion?user=123');
  });
});
