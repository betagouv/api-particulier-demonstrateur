'use client';

import Banner from '@/components/Banner';
import Tooltip from '@/components/Tooltip';

export default function MockFranceConnectLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Banner />
      {children}
      <Tooltip />
    </>
  );
}
