'use client';

import PurchaseInfo from '@/components/PurchaseInfo';
import PricingInfo from '@/components/PricingInfo';
import Tooltip from '@/components/Tooltip';
import { useJourney } from '@/app/journey-provider';

export default function Page() {
  const { journey } = useJourney();

  console.log(journey);
  return (
    <>
      <PurchaseInfo />
      <PricingInfo />
      <Tooltip />
    </>
  );
}
