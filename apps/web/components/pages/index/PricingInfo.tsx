import { fr } from '@codegouvfr/react-dsfr';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PricingInfo() {
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
        {/** Using span with br because Hydration failed. Indeed, HighLight component use already <p> for children.*/}
        <span style={{ fontSize: '30px' }}>{t('content.price')}</span>
        <br />
        <span style={{ fontSize: '20px', margin: 0 }}>{t('content.socialTariff')}</span>
        <br />
        <span style={{ fontSize: '15px', fontWeight: 'normal' }}>
          {t.rich('content.subContent', {
            br: () => <br />,
          })}
        </span>
        <br />
      </Highlight>
      <Link href="/souscription/connexion">
        <Button size="large" onClick={function noRefCheck() {}} iconId="fr-icon-arrow-right-line" iconPosition="right">
          {t('content.suscribeButton')}
        </Button>
      </Link>
    </div>
  );
}
