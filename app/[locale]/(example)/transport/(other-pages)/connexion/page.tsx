'use client';
import { useState } from 'react';
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
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/CustomButton';

export default function Page() {
  const { journey } = useJourney();
  const theme = useColors();
  const searchParams = useSearchParams();
  const t = useTranslations('Connexion');
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
          <Stepper
            currentStep={2}
            nextTitle={t('stepperNextTitle')}
            stepCount={journey?.user?.isFranceConnectAuth ? 3 : 4}
            title={t('stepperTitle')}
          />
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
                      backgroundColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default,
                    }}
                  >
                    {t.rich('tip', {
                      firstName: journey?.user?.firstName || '',
                      ul: (chunks) => <ul>{chunks}</ul>,
                      li: (chunks) => <li>{chunks}</li>,
                      b: (chunks) => <b>{chunks}</b>,
                      p: (chunks) => <p>{chunks}</p>,
                    })}
                    <CustomButton
                      onClick={() => {
                        setUsername('demo');
                        setPassword('demo');
                      }}
                      buttonText="Remplir"
                    />
                  </div>
                )}
                <Input
                  className={styles.centeredInput}
                  label={t('inputLabel')}
                  state="default"
                  stateRelatedMessage={t('inputRelatedMessage')}
                  nativeInputProps={{
                    onChange: (e) => {
                      setUsername(e.target.value);
                    },
                    value: username,
                  }}
                />

                <PasswordInput
                  className={styles.centeredInput}
                  label={t('inputPassword')}
                  nativeInputProps={{
                    onChange: (e) => {
                      setPassword(e.target.value);
                    },
                    value: password,
                  }}
                />
                {/* <div className={styles.forgotPassword}>Mot de passe oublié ?</div> */}
                <Button
                  disabled={username !== 'demo' || password !== 'demo'}
                  size="large"
                  onClick={() => {
                    if (!journey?.user?.isFranceConnectAuth) {
                      router.push('/' + journey?.type + '/formulaire?user=' + journey?.user?.id);
                    }
                  }}
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
              priority="tertiary no outline"
            >
              {t('bottomButton')}
            </Button>
          </div>
        </div>
      </div>

      <Tooltip isOpenedByDefault={true}>
        <ul>
          <li>
            <i className={fr.cx('ri-information-fill')} />{' '}
            <b>
              Les données de l’API Particulier sont sensibles et personnelles à l’usager. Seul ce dernier doit pouvoir
              les visualiser. C’est pourquoi votre service doit permettre d’identifier l’usager.
            </b>{' '}
            <ul>
              <li>
                <b>
                  Proposez{' '}
                  <a
                    href="https://franceconnect.gouv.fr/partenaires?source=homepage_header"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FranceConnect
                  </a>{' '}
                  &nbsp;:
                </b>{' '}
                <br />
                Ce mode d’authentification facilite et accélère grandement la démarche. Couplé à API Particulier, ce
                mode de connexion permet de délivrer une réponse instantanée à l’usager.
              </li>
              <li>
                <b>Mettez toujours à disposition un autre moyen d’authentification&nbsp;:</b>
                <br />
                FranceConnect n’est pas accessible à tous les usagers et l’API Particulier est tout à fait appelable
                sans FranceConnect.
              </li>
            </ul>
          </li>
        </ul>
        <ul></ul>
      </Tooltip>
    </>
  );
}
