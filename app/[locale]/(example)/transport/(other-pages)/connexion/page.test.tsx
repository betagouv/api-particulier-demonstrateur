import { render } from '@testing-library/react';
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
  it('should render Page', async () => {
    const { container } = render(<Page />);

    const stepperElement = container.querySelector('.fr-stepper');
    const franceConnectElement = container.querySelector('.fr-connect__login');
    const tagElement = container.querySelector('.fr-tag');
    const InputIDElement = container.querySelector('.fr-label');
    const InputPasswordElement = container.querySelector('.fr-password');
    const buttonElements = container.querySelectorAll('.fr-btn');
    const lien = container.querySelector('a[href="/aaa/choix-connexion?user=123"]');

    expect(lien).toBeInTheDocument();
    expect(stepperElement).toHaveClass('fr-stepper');
    expect(franceConnectElement).toHaveClass('fr-connect__login');
    expect(tagElement).toHaveClass('fr-tag');
    expect(InputIDElement).toHaveClass('fr-label');
    expect(InputPasswordElement).toHaveClass('fr-password');
    expect(buttonElements.length).toBe(3);
  });
});
