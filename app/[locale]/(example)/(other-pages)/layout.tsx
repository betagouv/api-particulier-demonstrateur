import SubscriptionInfo from '@/components/layout/souscription/SubscriptionInfo';

export default function SubscriptionLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <SubscriptionInfo />
      {children}
    </>
  );
}
