import { render } from '@testing-library/react';
import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/PricingInfo';
import Page from './page';

jest.mock('@/components/pages/souscription/PurchaseInfo');
jest.mock('@/components/pages/souscription/PricingInfo');

describe('Page component', () => {
  it('should render PurchaseInfo and PricingInfo components', async () => {
    render(<Page />);

    expect(PurchaseInfo).toHaveBeenCalledTimes(1);
    expect(PricingInfo).toHaveBeenCalledTimes(1);
  });
});
