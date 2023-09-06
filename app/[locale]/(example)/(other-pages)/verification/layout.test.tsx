import { renderWithProvider } from '@/utils/test.utils';
import Layout from './layout';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('Layout component', () => {
  it('should render the layout and its children', async () => {
    const { getByText, container } = renderWithProvider(
      <Layout>
        <p>Yolo</p>
      </Layout>,
      {
        user: { firstName: 'John', lastName: 'Doe', description: '', isFranceConnectAuth: true },
        type: 'canteen',
      },
    );

    const stepperElement = container.querySelector('.fr-stepper');
    expect(stepperElement).toBeInTheDocument();

    const cardElement = container.querySelector('.fr-card');
    expect(cardElement).toBeInTheDocument();

    const child = getByText('Yolo');
    expect(child).toBeInTheDocument();
  });
});
