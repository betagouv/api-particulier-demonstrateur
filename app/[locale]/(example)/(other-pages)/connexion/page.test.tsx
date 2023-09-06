import { renderWithProvider } from '@/utils/test.utils';
import Page from './page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('Page component', () => {
  it('should render Page', async () => {
    const { container } = renderWithProvider(<Page />);

    const stepperElement = container.querySelector('.fr-stepper');
    const franceConnectElement = container.querySelector('.fr-connect__login');
    const tagElement = container.querySelector('.fr-tag');
    const InputIDElement = container.querySelector('.fr-label');
    const InputPasswordElement = container.querySelector('.fr-password');
    const buttonElements = container.querySelectorAll('.fr-btn');
    const lien = container.querySelector('a[href="/choix-connexion"]');

    expect(lien).toBeInTheDocument();
    expect(stepperElement).toHaveClass('fr-stepper');
    expect(franceConnectElement).toHaveClass('fr-connect__login');
    expect(tagElement).toHaveClass('fr-tag');
    expect(InputIDElement).toHaveClass('fr-label');
    expect(InputPasswordElement).toHaveClass('fr-password');
    expect(buttonElements.length).toBe(5);
  });
});
