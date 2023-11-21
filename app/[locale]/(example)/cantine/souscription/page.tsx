'use client';

import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/canteen/PricingInfo';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('DemonstratorLayout');

  return (
    <>
      <PurchaseInfo
        title={t('cantine.subscribeTitle')}
        style={{ backgroundImage: 'url("/images/bg-cantine.jpg")' }}
        pricingStyle={{
          backgroundImage: 'url("/images/pricing-canteen.png")',
          height: '212px',
          width: '545px',
        }}
      />
      <PricingInfo />

      <Tooltip isOpenedByDefault={false} />
    </>
  );
}
