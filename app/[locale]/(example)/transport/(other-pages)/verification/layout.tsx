'use client';

import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';
import CardSocialPricing from '@/components/CardSocialPricing';
import Tooltip from '@/components/Tooltip';
import styles from './layout.module.css';
import { useJourney } from '@/app/journey-provider';

export default function Layout({ children }: { children: JSX.Element }) {
  const t = useTranslations('Verification');
  const { journey } = useJourney();

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
          <Stepper
            currentStep={3}
            nextTitle={t('stepperNextTitle')}
            stepCount={journey?.user?.isFranceConnectAuth ? 3 : 4}
            title={t('stepperTitle')}
          />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '65%' }}>{children}</div>

          <div style={{ flex: '35%', paddingLeft: '60px' }} className={styles.card}>
            <CardSocialPricing />
          </div>
        </div>
      </div>
      <Tooltip isOpenedByDefault={true}>
        <ul>
          <li>
            <i className={fr.cx('ri-information-fill')} />{' '}
            <b>
              En cas d’échec, indiquer que la connexion automatique n’a pu être établie et permettre à l’usager de
              reessayer ou de choisir une solution alternative.
            </b>
            <br />
            Cea
          </li>
        </ul>
        <ul></ul>
      </Tooltip>
    </>
  );
}
