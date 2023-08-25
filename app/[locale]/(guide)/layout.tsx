'use client';

import Banner from '@/components/Banner';

export default function GuideLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Banner />
      {children}
    </>
  );
}
