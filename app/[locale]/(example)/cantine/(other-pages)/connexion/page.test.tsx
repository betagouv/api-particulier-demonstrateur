import { render } from '@testing-library/react';
import Page from './page';
import { useJourney } from '@/app/journey-provider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
  useSearchParams: () => ({ get: jest.fn().mockReturnValue('yolo') }),
}));

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'aaa',
    user: {
      id: '123',
      isFranceConnectAuth: true,
    },
  },
}));

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should render Page', async () => {
    const { container } = render(<Page />);

    const stepperElement = container.querySelector('.fr-stepper');
    const franceConnectElement = container.querySelector('.fr-connect__login');
    const tagElement = container.querySelector('.fr-tag');
    const InputIDElement = container.querySelector('.fr-label');
    const InputPasswordElement = container.querySelector('.fr-password');
    const buttonElements = container.querySelectorAll('.fr-btn');
    const lien = container.querySelector('a[href="/aaa/choix-connexion?user=123&scope=yolo"]');
    const choiceContainerElement = container.querySelector('.choiceContainer');

    expect(lien).toBeInTheDocument();
    expect(choiceContainerElement).toHaveClass('withFranceConnectAuth');
    expect(stepperElement).toHaveClass('fr-stepper');
    expect(franceConnectElement).toHaveClass('fr-connect__login');
    expect(tagElement).toHaveClass('fr-tag');
    expect(InputIDElement).toHaveClass('fr-label');
    expect(InputPasswordElement).toHaveClass('fr-password');
    expect(buttonElements.length).toBe(3);
  });

  it('should render Page without france connect info', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: 'aaa',
        user: {
          id: '123',
          isFranceConnectAuth: false,
        },
      },
    }));
    const { container } = render(<Page />);

    const choiceContainerElement = container.querySelector('.choiceContainer');

    expect(choiceContainerElement).toHaveClass('withoutFranceConnectAuth');
  });
});
