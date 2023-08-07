import { render } from '@testing-library/react';
import Authentication from './Authentication';

describe('Authentication component', () => {
  it('should render Stepper composant', async () => {
    const { container } = render(<Authentication />);

    const stepperElement = container.querySelector('.fr-stepper');

    expect(stepperElement).not.toBeNull();
    expect(stepperElement).toHaveClass('fr-stepper');
  });
});
