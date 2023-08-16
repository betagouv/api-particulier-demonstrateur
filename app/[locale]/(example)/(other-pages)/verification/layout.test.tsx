import { render } from '@testing-library/react';
import Layout from './layout';

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
