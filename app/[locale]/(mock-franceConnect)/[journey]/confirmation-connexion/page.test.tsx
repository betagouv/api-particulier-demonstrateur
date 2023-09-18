import { render, fireEvent } from '@testing-library/react';
import Page from './page';
import { useJourney } from '@/app/journey-provider';

import Tooltip from '@/components/Tooltip';
import Banner from '@/components/Banner';

jest.mock('@/components/Tooltip');
jest.mock('@/components/Banner');

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'aaa',
    user: { id: '123', firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: false },
  },
}));

describe('ConnectionConfirmation component', () => {
  it('should render components', async () => {
    const { container, getByText } = render(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const headerElement = container.querySelector('.fr-header');

    const titleElement = getByText('title');
    const subTitleElement = getByText('John Doe');
    const buttonTextElement = getByText('button.aaa');
    const accordionTitleElement = getByText('accordionTitle');

    const accordionContent1Element = getByText('accordionContent1');
    const accordionContent2Element = getByText('accordionContent2');
    const accordionContent3Element = getByText('accordionContent3');
    const accordionContent4Element = getByText('accordionContent4');
    const accordionContent5Element = getByText('accordionContent5');
    const accordionContent6Element = getByText('accordionContent6');
    const accordionContent7Element = getByText('accordionContent7');
    const accordionContent8Element = getByText('accordionContent8.aaa');

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

    const { getByText } = render(<Page />);
    const button = getByText('button.aaa');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/aaa/verification/succes?user=123');
  });
  it('should have no users on page when journey is not setted', async () => {
    (useJourney as jest.Mock).mockImplementation(() => ({
      journey: {
        type: null,
        user: null,
      },
    }));
    const { getAllByRole } = render(<Page />);

    const items = getAllByRole('listitem');
    const eighthItem = items[7];

    expect(eighthItem).toBeInTheDocument();
    expect(eighthItem.textContent).toBe('');
  });
});
