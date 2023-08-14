import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import Link from 'next/link';
import { Button } from '@codegouvfr/react-dsfr/Button';
import CardSocialPricing from '@/components/common/CardSocialPricing';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';

export default function StatusCheckError() {
  const t = useTranslations('Erreur-verification');

  return (
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
        <Stepper currentStep={3} nextTitle={t('stepperNextTitle')} stepCount={4} title={t('stepperTitle')} />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '65%' }}>
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
        </div>

        <div style={{ flex: '35%', paddingLeft: '60px' }}>
          <CardSocialPricing />
        </div>
      </div>
    </div>
  );
}
