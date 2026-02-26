'use client';

import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { fr } from '@codegouvfr/react-dsfr';
import HighlightSubscription from '@/components/HighlightSubscription';
import BackgroundImage from '@/components/BackgroundImage';

export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations('DemonstratorLayout');

  return (
    <>
      <BackgroundImage url="/images/bg-cantine.jpg">
        <div
          className={'fr-container'}
          style={{
            position: 'relative',
            zIndex: 1,
            ...fr.spacing('padding', {
              top: '15v',
              bottom: '15v',
            }),
            width: '100%',
          }}
        >
          <h2>{t('cantine.eligibiliteTitle')}</h2>
          <HighlightSubscription
            style={{ marginBottom: '-20px' }}
            content={t('cantine.pricing.socialPrice')}
            subContent={t('cantine.pricing.subSocialPrice')}
          />
        </div>
      </BackgroundImage>
      {children}
    </>
  );
}
