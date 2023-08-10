import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import HighlightSubscription from '@/components/common/HighlightSubscription';

export default function PricingInfo() {
  const t = useTranslations('Souscription');

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
      <HighlightSubscription />
      <Link href="/souscription/connexion">
        <Button
          size="large"
          /*onClick={function noRefCheck() {}}*/
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
        >
          {t('content.button')}
        </Button>
      </Link>
    </div>
  );
}
