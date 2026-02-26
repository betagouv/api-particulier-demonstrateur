'use client';

import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { fr } from '@codegouvfr/react-dsfr';
import HighlightSubscription from '@/components/HighlightSubscription';
import styles from '@/components/BackgroundImage.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations('DemonstratorLayout');

  return (
    <>
      <div className={styles.backgroundImage} style={{ backgroundImage: 'url("/images/bg-transport.jpg")' }}>
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
          <h2>{t('transport.eligibiliteTitle')}</h2>
          <HighlightSubscription
            style={{ marginBottom: '-20px' }}
            title={t('transport.pricing.price')}
            content={t('transport.pricing.socialPrice')}
            subContent={t('transport.pricing.subSocialPrice')}
          />
        </div>
      </div>
      {children}
    </>
  );
}
