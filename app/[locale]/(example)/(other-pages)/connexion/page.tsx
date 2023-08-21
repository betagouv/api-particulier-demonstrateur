'use client';

import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import styles from './page.module.css';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { FranceConnectButton } from '@codegouvfr/react-dsfr/FranceConnectButton';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { PasswordInput } from '@codegouvfr/react-dsfr/blocks/PasswordInput';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Connexion');

  return (
    <div
      className={'fr-container'}
      style={{
        ...fr.spacing('padding', {
          top: '15v',
          bottom: '15v',
        }),
        width: '100%',
      }}
    >
      <Stepper currentStep={1} nextTitle={t('stepperNextTitle')} stepCount={3} title={t('stepperTitle')} />

      <div className={styles.choiceContainer}>
        <h2>{t('connectionTitle')}</h2>
        <div className={styles.choice}>
          <div className={styles.leftChoice}>
            <h3 className={styles.leftTitle}>{t('contentLeft')}</h3>
            <Tag className={styles.tag} iconId="fr-icon-notification-3-fill">
              {t('tagLeft')}
            </Tag>
            <FranceConnectButton url="/choix-connexion" />
          </div>
          <div className={styles.separator}>
            <span className={styles.orText}>{t('middleText')}</span>
          </div>
          <div className={styles.rightChoice}>
            <h3 className={styles.rightTitle}>{t('contentRight')}</h3>
            <Tag className={styles.tag} iconId="fr-icon-notification-3-fill">
              {t('tafRight')}
            </Tag>
            <Input
              className={styles.centeredInput}
              label={t('inputLabel')}
              state="default"
              stateRelatedMessage={t('inputRelatedMessage')}
            />

            <PasswordInput className={styles.centeredInput} label={t('inputPassword')} />
            {/* <div className={styles.forgotPassword}>Mot de passe oublié ?</div> */}
            <Button
              size="large"
              /*onClick={function noRefCheck() {}}*/
              iconId="fr-icon-arrow-right-line"
              iconPosition="right"
            >
              {t('buttonConnection')}
            </Button>
          </div>
        </div>
        <div className={styles.centeredText}>
          <h4 style={{ marginBottom: 0 }} className={styles.buttonBottom}>
            {t('bottomTitle')}
          </h4>
          <Button
            style={{ color: '#636363' }}
            iconId="fr-icon-arrow-right-line"
            iconPosition="right"
            // onClick={function noRefCheck() {}}
            priority="tertiary no outline"
          >
            {t('bottomButton')}
          </Button>
        </div>
      </div>
    </div>
  );
}
