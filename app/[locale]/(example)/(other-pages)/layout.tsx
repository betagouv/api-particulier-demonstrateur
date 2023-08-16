'use client';

import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { useTranslations } from 'next-intl';
import { fr } from '@codegouvfr/react-dsfr';
import HighlightSubscription from '@/components/HighlightSubscription';

export default function Layout({ children }: { children: JSX.Element }) {
  const theme = useColors();
  const t = useTranslations('Eligibilite');

  return (
    <>
      <div style={{ backgroundColor: theme.decisions.background.alt.grey.default }}>
        <div
          className={'fr-container'}
          style={{
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
