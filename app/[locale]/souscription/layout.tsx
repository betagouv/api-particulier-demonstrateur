import SubscriptionInfo from '@/components/pages/souscription/SubscriptionInfo';

export default function subscriptionLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <SubscriptionInfo />
      {children}
    </>
  );
}
