'use client';

import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import styles from './page.module.css';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useJourney } from '@/app/journey-provider';
import { FranceConnectButton } from '@codegouvfr/react-dsfr/FranceConnectButton';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { PasswordInput } from '@codegouvfr/react-dsfr/blocks/PasswordInput';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { useTranslations } from 'next-intl';
import Tooltip from '@/components/Tooltip';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const { journey } = useJourney();
  const theme = useColors();
  const searchParams = useSearchParams();
  const t = useTranslations('Connexion');

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
        }}
      >
        <div className={styles.stepper}>
          <Stepper currentStep={2} nextTitle={t('stepperNextTitle')} stepCount={4} title={t('stepperTitle')} />
        </div>

        <div
          className={`${styles.choiceContainer} ${
            journey?.user?.isFranceConnectAuth ? styles.withFranceConnectAuth : styles.withoutFranceConnectAuth
          }`}
        >
          <div className={styles.choice}>
            <div className={styles.leftChoice}>
              <h2 style={{ paddingBottom: '1rem' }}>{t('connectionTitle')}</h2>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <h3 className={styles.leftTitle}>{t('contentLeft')}</h3>
                <Tag className={styles.tag} iconId="fr-icon-notification-3-fill">
                  {t('tagLeft')}
                </Tag>
                <FranceConnectButton
                  url={
                    '/' +
                    journey?.type +
                    '/choix-connexion?user=' +
                    journey?.user?.id +
                    '&scope=' +
                    searchParams.get('scope')
                  }
                />
              </div>
            </div>
            <div className={styles.separator}>
              <span className={styles.orText}>{t('middleText')}</span>
            </div>
            <div
              className={styles.rightChoice}
              style={{
                zIndex: !journey?.user?.isFranceConnectAuth ? 2 : 1,
              }}
            >
              <h3 className={styles.rightTitle}>{t('contentRight')}</h3>
              <Tag className={styles.tag} iconId="fr-icon-notification-3-fill">
                {t('tafRight')}
              </Tag>

              <div
                className={`${!journey?.user?.isFranceConnectAuth ? styles.overlayAuth : ''}`}
                style={{
                  maxWidth: '360px',
                  width: '100%',
                  borderColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default,
                }}
              >
                {!journey?.user?.isFranceConnectAuth && (
                  <div
                    className={styles.infoAuth}
                    style={{
                      color: fr.colors.getHex({ isDark: !theme.isDark }).options.grey._200_850.default,
                      backgroundColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default,
                    }}
                  >
                    <p>
                      Dans ce scénario, {journey?.user?.firstName} choisit de se connecter avec son identifiant et son
                      mot de passe.
                      <br />
                    </p>
                    <p>
                      <b>Renseignez-les.</b>
                    </p>
                    <ul>
                      <li>Identifiant : demo</li>
                      <li>Mot de passe : demo</li>
                    </ul>
                  </div>
                )}
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
      <Tooltip />
    </>
  );
}
