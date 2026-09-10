import { render } from '@testing-library/react';
import Page from './page';
import { useJourney } from '@/app/journey-provider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    type: 'cantine',
    user: { id: '4' },
  },
}));

describe('Page component', () => {
  it('shows the CNAF-specific message for the without-FranceConnect journey, not the transport/student copy', () => {
    const { container } = render(<Page />);

    const title = container.querySelector('.fr-alert__title');

    expect(title?.textContent).toBe('error.title.qfMSAWithoutFranceConnect');
  });
});
