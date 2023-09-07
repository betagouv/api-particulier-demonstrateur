import { render, fireEvent } from '@testing-library/react';
import Page from './page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

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

  it('Button click', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<Page />);
    const button = getByText('button');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/end-journey');
  });
});
