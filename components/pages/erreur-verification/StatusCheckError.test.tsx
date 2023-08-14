import { render } from '@testing-library/react';
import StatusCheckError from './StatusCheckError';

describe('StatusCheckError component', () => {
  it('should render components correctly', async () => {
    const { container, getByText } = render(<StatusCheckError />);

    const stepperElement = container.querySelector('.fr-stepper');
    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelector('.fr-alert');
    const checkboxElement = container.querySelector('.fr-checkbox-group');
    const cardElement = container.querySelector('.fr-card');
    const checkboxLabel1 = getByText('checkboxLabel1');
    const checkboxLabel2 = getByText('checkboxLabel1');
    const checkboxLabel3 = getByText('checkboxLabel1');

    expect(checkboxLabel1).toBeInTheDocument();
    expect(checkboxLabel2).toBeInTheDocument();
    expect(checkboxLabel3).toBeInTheDocument();
    expect(cardElement).toBeInTheDocument();
    expect(stepperElement).toHaveClass('fr-stepper');
    expect(buttonElement).toHaveClass('fr-btn');
    expect(alertElement).toHaveClass('fr-alert');
    expect(checkboxElement).toHaveClass('fr-checkbox-group');
  });
});
