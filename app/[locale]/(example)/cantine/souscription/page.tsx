'use client';

import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/canteen/PricingInfo';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('DemonstratorLayout');

  return (
    <>
      <PurchaseInfo title={t('cantine.subscribeTitle')} style={{ backgroundImage: 'url("/images/bg-cantine.jpg")' }} />
      <PricingInfo />
      <Tooltip />
    </>
  );
}
