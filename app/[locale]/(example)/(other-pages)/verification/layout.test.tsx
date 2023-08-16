import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout component', () => {
  it('should render the layout and its children', async () => {
    const { getByLabelText, container } = render(
      <Layout>
        <p>Yolo</p>
      </Layout>,
    );

    const highlightElement = container.querySelector('.fr-highlight');
    expect(highlightElement).not.toBeNull();
    expect(highlightElement).toHaveClass('fr-highlight');

    const titleElement = getByLabelText('title');
    expect(titleElement).toBeInTheDocument();

    const child = getByLabelText('Yolo');
    expect(child).toBeInTheDocument();
  });
});
