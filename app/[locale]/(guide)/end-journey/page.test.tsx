import { renderWithProvider, fireEvent } from '@/utils/test.utils';

import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should calls correct components', async () => {
    const { container, getByText } = renderWithProvider(<Page />);

    const buttonElement = container.querySelectorAll('.fr-btn');

    const titleElement = getByText('title');
    const button1Element = getByText('button1');
    const button2Element = getByText('button2');

    expect(titleElement).toBeInTheDocument();
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
    expect(buttonElement.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });

  it('Button1', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = renderWithProvider(<Page />);
    const button = getByText('button1');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/eligibilite');
  });

  it('Button2', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = renderWithProvider(<Page />);
    const button = getByText('button2');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/');
  });
});
