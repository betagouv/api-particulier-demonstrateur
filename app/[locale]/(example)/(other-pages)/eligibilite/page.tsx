'use client';

import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import CardSocialPricing from '@/components/CardSocialPricing';
import Tooltip from '@/components/Tooltip';
import styles from './page.module.css';

export default function Page() {
  const t = useTranslations('Eligibilite');
  const router = useRouter();

  return (
    <>
      <div
        className={'fr-container'}
        style={{
          ...fr.spacing('padding', {
            top: '15v',
            bottom: '15v',
          }),
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ width: '65%' }}>
          <Stepper currentStep={2} nextTitle={t('stepperNextTitle')} stepCount={4} title={t('stepperTitle')} />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '65%' }}>
            <Checkbox
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
                    name: 'checkboxes-1',
                    value: 'value2',
                  },
                },
                {
                  label: t('checkboxLabel3'),
                  nativeInputProps: {
                    name: 'checkboxes-1',
                    value: 'value3',
                  },
                },
                {
                  label: t('checkboxLabel4'),
                  nativeInputProps: {
                    name: 'checkboxes-1',
                    value: 'value4',
                  },
                },
                {
                  label: t('checkboxLabel5'),
                  nativeInputProps: {
                    name: 'checkboxes-1',
                    value: 'value5',
                  },
                },
              ]}
            />

            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                size="large"
                onClick={() => router.push('/connexion')}
                iconId="fr-icon-arrow-right-line"
                iconPosition="right"
              >
                {t('button')}
              </Button>
            </div>
            <Alert
              closable
              title={t('alertTitle')}
              description={t('alertDescription')}
              // onClose={function noRefCheck() {}}
              severity="info"
              small
              style={{ marginTop: '60px' }}
            />
          </div>

          <div style={{ flex: '35%', paddingLeft: '60px' }} className={styles.card}>
            <CardSocialPricing />
          </div>
        </div>
      </div>
      <Tooltip />
    </>
  );
}
