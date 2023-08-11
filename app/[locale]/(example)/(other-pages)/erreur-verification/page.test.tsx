import { render } from '@testing-library/react';
import Verification from './page';

describe('Verification component', () => {
  it('should render component correctly', async () => {
    const { container } = render(<Verification />);

    const stepperElement = container.querySelector('.fr-stepper');

    expect(stepperElement).not.toBeNull();
  });
});
