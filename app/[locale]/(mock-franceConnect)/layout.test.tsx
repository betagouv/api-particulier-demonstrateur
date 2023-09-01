import { render } from '@testing-library/react';
import Layout from './layout';
import Tooltip from '@/components/Tooltip';

jest.mock('@/components/Banner');
jest.mock('@/components/Tooltip');

describe('Layout component', () => {
  it('should render the layout and its children', async () => {
    const { getByText } = render(
      <Layout>
        <p>Titi</p>
      </Layout>,
    );

    const child = getByText('Titi');
    expect(child).toBeInTheDocument();

    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
