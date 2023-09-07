'use client';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import { useRouter } from 'next/navigation';

export default function Page() {
  const t = useTranslations('Erreur-verification');
  const router = useRouter();
  return (
    <>
      <Alert
        closable
        title={t('alertTitle')}
        description={t('alertDesc')}
        // onClose={function noRefCheck() {}}
        severity="warning"
        small
        style={{ marginTop: '60px', marginBottom: '20px' }}
      />

      <Checkbox
        style={{ fontWeight: 'bold' }}
        legend={t('checkboxLegend')}
        options={[
          {
            label: t('checkboxLabel1'),
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'value1',
            },
          },
          {
            label: t('checkboxLabel2'),
            nativeInputProps: {
              name: 'checkboxes-2',
              value: 'value2',
            },
          },
          {
            label: t('checkboxLabel3'),
            nativeInputProps: {
              name: 'checkboxes-3',
              value: 'value3',
            },
          },
        ]}
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
          onClick={() => router.push('/end-journey')}
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
        >
          {t('button')}
        </Button>
      </div>
    </>
  );
}
