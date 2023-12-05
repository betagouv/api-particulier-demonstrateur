'use client';

import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/transport/PricingInfo';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('DemonstratorLayout');

  return (
    <>
      <PurchaseInfo
        title={t('transport.subscribeTitle')}
        style={{ backgroundImage: 'url("/images/bg-transport.jpg")' }}
        pricingStyle={{
          backgroundImage: 'url("/images/pricing-transport.png")',
          height: '270px',
          width: '350px',
        }}
      />
      <PricingInfo />
      <Tooltip isOpenedByDefault={false} />
    </>
  );
}
