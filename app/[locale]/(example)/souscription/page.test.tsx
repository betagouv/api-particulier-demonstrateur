import { render } from '@testing-library/react';
import PurchaseInfo from '@/components/pages/souscription/PurchaseInfo';
import PricingInfo from '@/components/pages/souscription/PricingInfo';
import Index from './page';

jest.mock('@/components/pages/souscription/PurchaseInfo');
jest.mock('@/components/pages/souscription/PricingInfo');

describe('Index component', () => {
  it('should render PurchaseInfo and PricingInfo components', async () => {
    render(<Index />);

    expect(PurchaseInfo).toHaveBeenCalledTimes(1);
    expect(PricingInfo).toHaveBeenCalledTimes(1);
  });
});
