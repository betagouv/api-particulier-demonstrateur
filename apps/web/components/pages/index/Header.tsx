import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';

export default function Header() {
  const theme = useColors();
  const t = useTranslations('Index');

  return (
    <div style={{ backgroundColor: theme.decisions.background.alt.blueFrance.default }}>
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
        <h1 style={{ fontSize: '50px' }}>
          {t.rich('title', {
            br: () => <br />,
          })}
        </h1>
      </div>
    </div>
  );
}
