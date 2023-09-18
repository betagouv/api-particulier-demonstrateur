import { render } from '@testing-library/react';
import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/transport/PricingInfo';
import Tooltip from '@/components/Tooltip';
import Page from './page';

jest.mock('@/components/PurchaseInfo');
jest.mock('@/components/transport/PricingInfo');
jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should render PurchaseInfo and PricingInfo components', async () => {
    render(<Page />);

    expect(PurchaseInfo).toHaveBeenCalledTimes(1);
    expect(PricingInfo).toHaveBeenCalledTimes(1);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
