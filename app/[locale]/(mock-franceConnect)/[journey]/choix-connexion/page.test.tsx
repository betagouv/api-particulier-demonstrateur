import Page from './page';
import { render, fireEvent } from '@testing-library/react';
import { useJourney } from '@/app/journey-provider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
  useSearchParams: () => ({ get: jest.fn().mockReturnValue('yolo') }),
}));

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'aaa',
    user: { id: '123', firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
  },
}));

describe('ConnectionChoice component', () => {
  beforeEach(() => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'aaa',
        user: { id: '123', firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
      },
    }));
  });

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

  it('should render with undefined firstName', () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'aaa',
        user: { id: '123', lastName: 'Doe', description: '', isFranceConnectAuth: false },
      },
    }));

    const { getByText } = render(<Page />);
    expect(getByText('overlayText.title')).toBeInTheDocument();
  });

  it('Button click', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('overlayText.button');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/aaa/impot-connexion?user=123&scope=yolo');
  });
});
