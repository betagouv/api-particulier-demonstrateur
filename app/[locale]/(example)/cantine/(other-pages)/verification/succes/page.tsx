'use client';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';

export default function Page() {
  const { journey } = useJourney();
  const t = useTranslations('Succes-verification');
  const router = useRouter();
  return (
    <>
      <Alert
        closable
        title={t('alertInfoTitle')}
        description={t('alertInfoDescription')}
        // onClose={function noRefCheck() {}}
        severity="info"
        small
        style={{ marginTop: '60px' }}
      />
      <Alert
        closable
        description={t('alertSuccessDescription')}
        // onClose={function noRefCheck() {}}
        severity="success"
        title={t('alertSuccessTitle')}
      />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '20px',
          paddingBottom: '50px',
        }}
      >
        <Button
          size="large"
          // onClick={function noRefCheck() {}}
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          onClick={() => router.push('/' + journey?.type + '/end-journey?user=' + journey?.user?.id)}
        >
          {t('button')}
        </Button>
      </div>
    </>
  );
}
