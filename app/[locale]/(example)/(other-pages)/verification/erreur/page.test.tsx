import { render } from '@testing-library/react';
import Page from './page';

describe('Page component', () => {
  it('should render Page correctly', async () => {
    const { container, getByText } = render(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelector('.fr-alert');
    const checkboxElement = container.querySelector('.fr-checkbox-group');
    const checkboxLabel1 = getByText('checkboxLabel1');
    const checkboxLabel2 = getByText('checkboxLabel1');
    const checkboxLabel3 = getByText('checkboxLabel1');

    expect(checkboxLabel1).toBeInTheDocument();
    expect(checkboxLabel2).toBeInTheDocument();
    expect(checkboxLabel3).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(alertElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
  });
});
