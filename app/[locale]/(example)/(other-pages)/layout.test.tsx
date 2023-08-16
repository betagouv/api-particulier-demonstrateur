import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout component', () => {
  it('should render the layout and its children', async () => {
    const { getByText, container } = render(
      <Layout>
        <p>Yolo</p>
      </Layout>,
    );

    const highlightElement = container.querySelector('.fr-highlight');
    expect(highlightElement).not.toBeNull();
    expect(highlightElement).toHaveClass('fr-highlight');

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();

    const child = getByText('Yolo');
    expect(child).toBeInTheDocument();
  });
});
