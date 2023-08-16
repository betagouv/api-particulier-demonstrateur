'use client';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@codegouvfr/react-dsfr/Button';

export default function Page() {
  const t = useTranslations('Succes-verification');
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
        <Link href="">
          <Button
            size="large"
            // onClick={function noRefCheck() {}}
            iconId="fr-icon-arrow-right-line"
            iconPosition="right"
          >
            {t('button')}
          </Button>
        </Link>
      </div>
    </>
  );
}
