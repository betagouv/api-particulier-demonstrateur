import { render } from '@testing-library/react';
import Connexion from './page';

describe('Connexion component', () => {
  it('should render component correctly', async () => {
    const { container } = render(<Connexion />);

    const stepperElement = container.querySelector('.fr-stepper');

    expect(stepperElement).not.toBeNull();
  });
});
