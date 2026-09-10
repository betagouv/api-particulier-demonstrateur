'use client';

import { ReactNode } from 'react';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import Banner from '@/components/Banner';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function DemonstratorLayout({ children }: { children: ReactNode }) {
  const t = useTranslations('DemonstratorLayout');
  const pathname = usePathname();
  // pathname is locale-prefixed (e.g. /fr/cantine/connexion): segment 1 is the
  // locale, segment 2 is the use case.
  const type = pathname.split('/')[2];

  return (
    <>
      <Banner />
      <Header
        style={{ zIndex: 'unset' }}
        brandTop={<>{t('headerLogo')}</>}
        serviceTitle={t(type + '.serviceTitle')}
        homeLinkProps={{
          href: '/',
          title: t(type + '.homeLinkTitle'),
        }}
      />
      {children}
      <Footer
        accessibility="fully compliant"
        contentDescription={t('footerDesc')}
        bottomItems={[headerFooterDisplayItem]}
      />
    </>
  );
}
