import { render, fireEvent } from '@testing-library/react';
import PricingInfo from './PricingInfo';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

jest.mock('@/app/journey-provider', () => ({
  useJourney: () => ({
    journey: {
      type: 'aaa',
      user: {
        id: '123',
      },
    },
  }),
}));

describe('PricingInfo component', () => {
  it('should render Highlight composant', async () => {
    const { container } = render(<PricingInfo />);
    const highlightElement = container.querySelector('.fr-highlight');
    expect(highlightElement).not.toBeNull();
  });

  it('should render with correct text', async () => {
    const { getByText } = render(<PricingInfo />);
    const titleElement = getByText('transport.pricing.title');
    expect(titleElement).toBeInTheDocument();
  });

  it('Button next click', () => {
    const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
    const pushMock = jest.fn();
    routerMock.mockReturnValue({ push: pushMock });

    const { getByText } = render(<PricingInfo />);
    const button = getByText('transport.pricing.button');
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/aaa/eligibilite?user=123');
  });
});
