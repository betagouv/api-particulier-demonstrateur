'use client';

import { useTranslations } from 'next-intl';
import { fr } from '@codegouvfr/react-dsfr';
import HighlightSubscription from '@/components/HighlightSubscription';
import styles from '../../../../components/BackgroundImage.module.css';

export default function Layout({ children }: { children: JSX.Element }) {
  const t = useTranslations('Eligibilite');

  return (
    <>
      <div className={styles.backgroundImage}>
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
          <h2>{t('title')}</h2>
          <HighlightSubscription />
        </div>
      </div>
      {children}
    </>
  );
}
