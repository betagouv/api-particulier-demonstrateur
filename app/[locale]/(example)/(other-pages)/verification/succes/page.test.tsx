import { render } from '@testing-library/react';
import Page from './page';

describe('Page component', () => {
  it('should render Page correctly', async () => {
    const { container } = render(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelectorAll('.fr-alert');

    expect(buttonElement).toBeInTheDocument();
    expect(alertElement.length).toBe(2);
  });
});
