'use client';

import { Header } from '@codegouvfr/react-dsfr/Header';
import { Footer } from '@codegouvfr/react-dsfr/Footer';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { useTranslations } from 'next-intl';

export default function DemonstratorLayout({ children }: { children: JSX.Element }) {
  const t = useTranslations('DemonstratorLayout');

  return (
    <>
      <Header
        style={{ zIndex: 'unset' }}
        brandTop={<>{t('header.brandTop')}</>}
        serviceTitle={t('header.serviceTitle')}
        homeLinkProps={{
          href: '/',
          title: t('header.homeLinkTitle'),
        }}
      />
      {children}
      <Footer
        accessibility="fully compliant"
        contentDescription={t('header.footerDesc')}
        bottomItems={[headerFooterDisplayItem]}
      />
    </>
  );
}
