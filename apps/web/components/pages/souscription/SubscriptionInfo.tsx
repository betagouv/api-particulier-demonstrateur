'use client';

import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { useTranslations } from 'next-intl';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
import { fr } from '@codegouvfr/react-dsfr';

export default function SubscriptionInfo() {
  const theme = useColors();
  const t = useTranslations('Souscription');

  return (
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
        <Highlight size="lg" style={{ margin: 0 }}>
          <p style={{ fontSize: '30px' }}>{t('price')}</p>
          <p style={{ fontSize: '20px', margin: 0 }}>{t('socialTariff')}</p>
          <p style={{ fontSize: '15px', fontWeight: 'normal' }}>
            {t.rich('subContent', {
              br: () => <br />,
            })}
          </p>
        </Highlight>
      </div>
    </div>
  );
}
