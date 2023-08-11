import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import Link from 'next/link';
import { Button } from '@codegouvfr/react-dsfr/Button';

export default function StatusCheck() {
  const t = useTranslations('Verification');

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
        </div>

        <div style={{ flex: '35%', paddingLeft: '60px' }}>
          <Card
            desc={t('cardDescription')}
            enlargeLink
            endDetail={t('cardDetail')}
            imageAlt="texte alternatif de l’image"
            linkProps={{
              href: '#',
            }}
            title={t('cardTitle')}
          />
        </div>
      </div>
    </div>
  );
}
