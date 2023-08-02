import { fr } from '@codegouvfr/react-dsfr';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';

export default function Content() {
  const t = useTranslations('Index');

  return (
    <div
      className={'fr-container'}
      id="id"
      style={{
        ...fr.spacing('padding', {
          top: '10v',
          bottom: '15v',
        }),
      }}
    >
      <h2>{t('content.title')}</h2>
      <Highlight size="lg" style={{ margin: 0 }}>
        <p style={{ fontSize: '30px' }}>{t('content.price')}</p>
        <p style={{ fontSize: '20px', margin: 0 }}>{t('content.socialTariff')}</p>
        <p style={{ fontSize: '15px', fontWeight: 'normal' }}>
          {t.rich('content.subContent', {
            br: () => <br />,
          })}
        </p>
      </Highlight>
      <Button size="large" onClick={function noRefCheck() {}} iconId="fr-icon-arrow-right-line" iconPosition="right">
        {t('content.suscribeButton')}
      </Button>
    </div>
  );
}
