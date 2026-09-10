import { render } from '@testing-library/react';
import Layout from './layout';
import Banner from '@/components/Banner';

jest.mock('@/components/Banner');

const mockUsePathname = jest.fn().mockImplementation(() => {
  return '/a/b/c/d';
});

jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

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

  it('derives the use case from the pathname segment after the locale, not the locale itself', async () => {
    mockUsePathname.mockReturnValue('/fr/cantine/connexion');

    const { getByText } = render(
      <Layout>
        <p>Toto</p>
      </Layout>,
    );

    expect(getByText('cantine.serviceTitle')).toBeInTheDocument();
  });
});
