import { render } from '@testing-library/react';
import StatusCheck from './StatusCheckSuccess';

describe('StatusCheck component', () => {
  it('should render components correctly', async () => {
    const { container } = render(<StatusCheck />);

    const stepperElement = container.querySelector('.fr-stepper');
    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelectorAll('.fr-alert');
    const cardElement = container.querySelector('.fr-card');
    // const linkElements = container.querySelector('a[href="/"]');

    expect(stepperElement).toHaveClass('fr-stepper');
    expect(buttonElement).toHaveClass('fr-btn');
    expect(cardElement).toHaveClass('fr-card');
    // expect(linkElements).toBeInTheDocument();
    expect(alertElement.length).toBe(2);
  });
});
