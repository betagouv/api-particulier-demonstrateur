import { render } from '@testing-library/react';
import Eligibility from './Eligibility';

describe('Eligibility component', () => {
  it('should render components correctly', async () => {
    const { container } = render(<Eligibility />);

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
