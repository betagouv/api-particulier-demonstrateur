import { render } from '@testing-library/react';
import Layout from './layout';
import Banner from '@/components/Banner';

jest.mock('@/components/Banner');

describe('Layout component', () => {
  it('should render the layout and its children', async () => {
    const { getByText, container } = render(
      <Layout>
        <p>Toto</p>
      </Layout>,
    );

    const headerElement = container.querySelector('.fr-header');
    expect(headerElement).toBeInTheDocument();

    const footerElement = container.querySelector('.fr-footer');
    expect(footerElement).toBeInTheDocument();

    const child = getByText('Toto');
    expect(child).toBeInTheDocument();

    expect(Banner).toHaveBeenCalledTimes(1);
  });
});
