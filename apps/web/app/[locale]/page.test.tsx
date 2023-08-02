import { render } from '@testing-library/react';
import Header from '@/components/pages/index/Header';
import Content from '@/components/pages/index/Content';
import Index from './page';

jest.mock('@/components/pages/index/Header');
jest.mock('@/components/pages/index/Content');

describe('Index component', () => {
  it('should render Header and Content components', async () => {
    render(<Index />);

    expect(Header).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledTimes(1);
  });
});
