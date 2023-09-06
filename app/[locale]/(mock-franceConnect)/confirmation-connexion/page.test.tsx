import { renderWithProvider, fireEvent } from '@/utils/test.utils';
import Page from './page';

import Tooltip from '@/components/Tooltip';
import Banner from '@/components/Banner';

jest.mock('@/components/Tooltip');
jest.mock('@/components/Banner');

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('ConnectionConfirmation component', () => {
  it('should render components', async () => {
    const { container, getByText } = renderWithProvider(<Page />, {
      user: { firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
      type: 'canteen',
    });

    const buttonElement = container.querySelector('.fr-btn');
    const headerElement = container.querySelector('.fr-header');

    const titleElement = getByText('title');
    const subTitleElement = getByText('John Doe');
    const buttonTextElement = getByText('button');
    const accordionTitleElement = getByText('accordionTitle');

    const accordionContent1Element = getByText('accordionContent1');
    const accordionContent2Element = getByText('accordionContent2');
    const accordionContent3Element = getByText('accordionContent3');
    const accordionContent4Element = getByText('accordionContent4');
    const accordionContent5Element = getByText('accordionContent5');
    const accordionContent6Element = getByText('accordionContent6');
    const accordionContent7Element = getByText('accordionContent7');
    const accordionContent8Element = getByText('accordionContent8');

    expect(buttonElement).toHaveClass('fr-btn');
    expect(headerElement).toHaveClass('fr-header');
    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
    expect(accordionTitleElement).toBeInTheDocument();

    expect(accordionContent1Element).toBeInTheDocument();
    expect(accordionContent2Element).toBeInTheDocument();
    expect(accordionContent3Element).toBeInTheDocument();
    expect(accordionContent4Element).toBeInTheDocument();
    expect(accordionContent5Element).toBeInTheDocument();
    expect(accordionContent6Element).toBeInTheDocument();
    expect(accordionContent7Element).toBeInTheDocument();
    expect(accordionContent8Element).toBeInTheDocument();

    expect(Tooltip).toHaveBeenCalledTimes(1);
    expect(Banner).toHaveBeenCalledTimes(1);
  });

  it('Button click', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = renderWithProvider(<Page />);
    const button = getByText('button');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/verification/succes');
  });
});
