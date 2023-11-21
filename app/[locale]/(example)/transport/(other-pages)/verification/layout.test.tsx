import { render } from '@testing-library/react';
import Layout from './layout';
import { useJourney } from '@/app/journey-provider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
  useSearchParams: () => ({ get: jest.fn().mockReturnValue('yolo') }),
}));
jest.mock('@/components/Tooltip');

jest.mock('@/app/journey-provider');
(useJourney as jest.Mock).mockImplementation(() => ({
  journey: {
    user: {
      isFranceConnectAuth: true,
    },
  },
}));

describe('Layout component', () => {
  it('should render the layout and its children', async () => {
    const { getByText, container } = render(
      <Layout>
        <p>Yolo</p>
      </Layout>,
    );

    const stepperElement = container.querySelector('.fr-stepper');
    expect(stepperElement).toBeInTheDocument();

    const cardElement = container.querySelector('.fr-card');
    expect(cardElement).toBeInTheDocument();

    const child = getByText('Yolo');
    expect(child).toBeInTheDocument();
  });
});
