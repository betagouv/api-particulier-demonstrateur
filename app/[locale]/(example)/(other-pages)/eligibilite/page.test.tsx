import { renderWithProvider } from '@/utils/test.utils';
import Page from './page';

describe('Page component', () => {
  it('should render page', async () => {
    const { container } = renderWithProvider(<Page />);

    const stepperElement = container.querySelector('.fr-stepper');
    const checkboxElement = container.querySelector('.fr-checkbox-group');
    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelector('.fr-alert');
    const cardElement = container.querySelector('.fr-card');
    const linkElements = container.querySelector('a[href="/connexion"]');

    expect(stepperElement).toHaveClass('fr-stepper');
    expect(checkboxElement).toHaveClass('fr-checkbox-group');
    expect(buttonElement).toHaveClass('fr-btn');
    expect(alertElement).toHaveClass('fr-alert');
    expect(cardElement).toHaveClass('fr-card');
    expect(linkElements).toBeInTheDocument();
  });
});
