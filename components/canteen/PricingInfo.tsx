import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';
import HighlightSubscription from '@/components/HighlightSubscription';

export default function PricingInfo() {
  const { journey } = useJourney();
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
      <h2>{t('cantine.pricing.title')}</h2>
      <HighlightSubscription
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
        title={t('cantine.pricing.price')}
        content={t('cantine.pricing.socialPrice')}
        subContent={t('cantine.pricing.subSocialPrice')}
      />
      <Button
        onClick={() => router.push('/' + journey?.type + '/connexion?user=' + journey?.user?.id + '&scope=qfMSA')}
        size="large"
        iconId="fr-icon-arrow-right-line"
        iconPosition="right"
      >
        {t('cantine.pricing.button')}
      </Button>
    </div>
  );
}
