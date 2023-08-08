import { render } from '@testing-library/react';
import PurchaseInfo from '@/components/pages/index/PurchaseInfo';
import PricingInfo from '@/components/pages/index/PricingInfo';
import Index from './page';

jest.mock('@/components/pages/index/PurchaseInfo');
jest.mock('@/components/pages/index/PricingInfo');

describe('Index component', () => {
  it('should render PurchaseInfo and PricingInfo components', async () => {
    render(<Index />);

    expect(PurchaseInfo).toHaveBeenCalledTimes(1);
    expect(PricingInfo).toHaveBeenCalledTimes(1);
  });
});
