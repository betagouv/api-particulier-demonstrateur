import { renderWithProvider } from '@/utils/test.utils';
import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/PricingInfo';
import Tooltip from '@/components/Tooltip';
import Page from './page';

jest.mock('@/components/PurchaseInfo');
jest.mock('@/components/PricingInfo');
jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should render PurchaseInfo and PricingInfo components', async () => {
    renderWithProvider(<Page />);

    expect(PurchaseInfo).toHaveBeenCalledTimes(1);
    expect(PricingInfo).toHaveBeenCalledTimes(1);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
