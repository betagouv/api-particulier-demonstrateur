'use client';

import { useState } from 'react';
import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';
import CardSocialPricing from '@/components/CardSocialPricing';
import Tooltip from '@/components/Tooltip';
import styles from './page.module.css';

export default function Page() {
  const t = useTranslations('Eligibilite');
  const router = useRouter();
  const { journey } = useJourney();
  const [scope, setScope] = useState<'jobSeeker' | 'student' | 'studentScholarship' | 'c2s' | undefined | null>(
    undefined,
  );

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
        <div className={styles.stepper}>
          <Stepper currentStep={1} nextTitle={t('stepperNextTitle')} stepCount={4} title={t('stepperTitle')} />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '65%' }}>
            <RadioButtons
              legend={t('checkboxLegend')}
              name="Statut"
              options={[
                {
                  label: t('checkboxLabel1'),
                  nativeInputProps: {
                    checked: scope === 'jobSeeker',
                    onChange: () => setScope('jobSeeker'),
                  },
                },
                {
                  label: t('checkboxLabel2'),
                  nativeInputProps: {
                    checked: scope === 'student',
                    onChange: () => setScope('student'),
                  },
                },
                {
                  label: t('checkboxLabel3'),
                  nativeInputProps: {
                    checked: scope === 'studentScholarship',
                    onChange: () => setScope('studentScholarship'),
                  },
                },
                {
                  label: t('checkboxLabel4'),
                  nativeInputProps: {
                    checked: scope === 'c2s',
                    onChange: () => setScope('c2s'),
                  },
                },
                {
                  label: t('checkboxLabel5'),
                  nativeInputProps: {
                    checked: scope === null,
                    onChange: () => setScope(null),
                  },
                },
              ]}
            />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                disabled={scope === undefined}
                size="large"
                onClick={() =>
                  router.push('/' + journey?.type + '/connexion?user=' + journey?.user?.id + '&scope=' + scope)
                }
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
