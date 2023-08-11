import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';

export default function PurchaseInfo() {
  const theme = useColors();
  const t = useTranslations('Souscription');

  return (
    <div style={{ backgroundColor: theme.decisions.background.alt.blueCumulus.default }}>
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
        <h1 style={{ fontSize: '50px', maxWidth: '700px', overflowWrap: 'break-word' }}>{t('title')}</h1>
      </div>
    </div>
  );
}
