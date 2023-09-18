import Page from './page';
import { render, fireEvent } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

jest.mock('@/app/journey-provider', () => ({
  useJourney: () => ({
    journey: {
      type: 'aaa',
      user: { id: '123', firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
    },
  }),
}));

describe('ConnectionChoice component', () => {
  it('should render components', async () => {
    const { container, getByText, getAllByText } = render(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const headerElement = container.querySelector('.fr-header');

    const overlayTextTitleElement = getByText('overlayText.title');
    const overlayButtonElement = getByText('overlayText.button');
    const titleElements = getAllByText('title');
    const subTitleElement = getByText('subTitle');

    expect(buttonElement).toHaveClass('fr-btn');
    expect(headerElement).toHaveClass('fr-header');
    expect(titleElements.length).toBe(2);
    expect(subTitleElement).toBeInTheDocument();
    expect(overlayTextTitleElement).toBeInTheDocument();
    expect(overlayButtonElement).toBeInTheDocument();
  });

  it('Button click', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('overlayText.button');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/aaa/impot-connexion?user=123');
  });
});
