'use client';

import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/PricingInfo';
import Tooltip from '@/components/Tooltip';

export default function Page() {
  return (
    <>
      <PurchaseInfo />
      <PricingInfo />
      <Tooltip />
    </>
  );
}
