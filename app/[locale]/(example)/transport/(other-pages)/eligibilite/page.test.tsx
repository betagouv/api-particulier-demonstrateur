import { renderWithProvider, fireEvent } from '@/utils/test.utils';
import Page from './page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('Page component', () => {
  it('should render page', async () => {
    const { container } = renderWithProvider(<Page />);

    const stepperElement = container.querySelector('.fr-stepper');
    const checkboxElement = container.querySelector('.fr-checkbox-group');
    const buttonElement = container.querySelector('.fr-btn');
    const alertElement = container.querySelector('.fr-alert');
    const cardElement = container.querySelector('.fr-card');

    expect(stepperElement).toHaveClass('fr-stepper');
    expect(checkboxElement).toHaveClass('fr-checkbox-group');
    expect(buttonElement).toHaveClass('fr-btn');
    expect(alertElement).toHaveClass('fr-alert');
    expect(cardElement).toHaveClass('fr-card');
  });

  it('Button click', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = renderWithProvider(<Page />);
    const button = getByText('button');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/transport/connexion');
  });
});
