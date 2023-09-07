import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import HighlightSubscription from '@/components/HighlightSubscription';

export default function PricingInfo() {
  const t = useTranslations('DemonstratorLayout');
  const router = useRouter();

  return (
    <div
      className={'fr-container'}
      id="id"
      style={{
        ...fr.spacing('padding', {
          top: '15v',
          bottom: '15v',
        }),
      }}
    >
      <h2>{t('transport.pricing.title')}</h2>
      <HighlightSubscription
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
        title={t('transport.pricing.price')}
        content={t('transport.pricing.socialPrice')}
        subContent={t('transport.pricing.subSocialPrice')}
      />
      <Button
        onClick={() => router.push('/transport/eligibilite')}
        size="large"
        iconId="fr-icon-arrow-right-line"
        iconPosition="right"
      >
        {t('transport.pricing.button')}
      </Button>
    </div>
  );
}
