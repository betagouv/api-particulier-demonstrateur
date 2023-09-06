import { render, fireEvent } from '@testing-library/react';
import Page from './page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('Page component', () => {
  it('should render Page correctly', async () => {
    const { container } = render(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelectorAll('.fr-alert');

    expect(buttonElement).toBeInTheDocument();
    expect(alertElement.length).toBe(2);
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
