import { render } from '@testing-library/react';
import Eligibilite from './page';

describe('Eligibilite component', () => {
  it('should render component correctly', async () => {
    const { container } = render(<Eligibilite />);

    const stepperElement = container.querySelector('.fr-stepper');

    expect(stepperElement).not.toBeNull();
  });
});
