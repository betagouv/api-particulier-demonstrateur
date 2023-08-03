import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import { Button } from '@codegouvfr/react-dsfr/Button';
import Link from 'next/link';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';

export default function Eligibility() {
  const t = useTranslations('Souscription');

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
        <Stepper
          currentStep={2}
          nextTitle={t('eligibilite.stepperNextTitle')}
          stepCount={4}
          title={t('eligibilite.stepperTitle')}
        />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '65%' }}>
          <Checkbox
            legend={t('eligibilite.checkboxLegend')}
            options={[
              {
                label: t('eligibilite.checkboxLabel1'),
                nativeInputProps: {
                  name: 'checkboxes-1',
                  value: 'value1',
                },
              },
              {
                label: t('eligibilite.checkboxLabel2'),
                nativeInputProps: {
                  name: 'checkboxes-1',
                  value: 'value2',
                },
              },
              {
                label: t('eligibilite.checkboxLabel3'),
                nativeInputProps: {
                  name: 'checkboxes-1',
                  value: 'value3',
                },
              },
              {
                label: t('eligibilite.checkboxLabel4'),
                nativeInputProps: {
                  name: 'checkboxes-1',
                  value: 'value4',
                },
              },
              {
                label: t('eligibilite.checkboxLabel5'),
                nativeInputProps: {
                  name: 'checkboxes-1',
                  value: 'value5',
                },
              },
            ]}
          />

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="">
              <Button
                size="large"
                onClick={function noRefCheck() {}}
                iconId="fr-icon-arrow-right-line"
                iconPosition="right"
              >
                {t('eligibilite.button')}
              </Button>
            </Link>
          </div>
          <Alert
            closable
            title={t('eligibilite.alertTitle')}
            description={t('eligibilite.alertDescription')}
            onClose={function noRefCheck() {}}
            severity="info"
            small
            style={{ marginTop: '60px' }}
          />
        </div>

        <div style={{ flex: '35%' }}>
          <Card
            desc={t('eligibilite.cardDescription')}
            enlargeLink
            endDetail={t('eligibilite.cardDetail')}
            imageAlt="texte alternatif de l’image"
            linkProps={{
              href: '#',
            }}
            title={t('eligibilite.cardTitle')}
          />
        </div>
      </div>
    </div>
  );
}
