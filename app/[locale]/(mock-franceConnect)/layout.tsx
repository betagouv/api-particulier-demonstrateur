'use client';

import Tooltip from '@/components/Tooltip';

export default function MockFranceConnectLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      {children}
      <Tooltip />
    </>
  );
}
