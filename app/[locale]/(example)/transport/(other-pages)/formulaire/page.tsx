'use client';

import React, { useState } from 'react';
import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';
import CardSocialPricing from '@/components/CardSocialPricing';
import Tooltip from '@/components/Tooltip';
import styles from './page.module.css';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import CustomButton from '@/components/CustomButton';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const t = useTranslations('Formulaire');
  const router = useRouter();
  const { journey } = useJourney();
  const theme = useColors();

  const colorTip = fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default;

  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const [birthdate, setBirthdate] = useState<string>(error ? (error === 'true' ? '' : '2003-04-17') : '');
  const [sex, setSex] = useState<string>(error ? (error === 'true' ? '' : 'female') : '');
  const [ine, setIne] = useState<string>(error ? (error === 'true' ? '12345678' : '') : '');

  const resetFields = () => {
    setBirthdate('');
    setSex('');
    setIne('');
  };

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
          <div style={{ flex: '65%' }}>
            <div style={{ position: 'relative' }}>
              <p>
                <b>{t('titleForm')}</b>
              </p>
              <div className={styles.containerInputs} style={{ marginBottom: '2rem' }}>
                <div className={`${styles.inputGroup}`}>
                  <Input
                    hintText=""
                    label={t('firstName')}
                    state="default"
                    disabled
                    stateRelatedMessage=""
                    nativeInputProps={{
                      value: journey?.user?.firstName || '',
                    }}
                  />
                  <Input
                    hintText=""
                    label={t('lastName')}
                    state="default"
                    disabled
                    stateRelatedMessage=""
                    nativeInputProps={{
                      value: journey?.user?.lastName || '',
                    }}
                  />
                </div>

                <div className={styles.tip} style={{ borderColor: colorTip }}>
                  <div
                    style={{
                      backgroundColor: colorTip,
                    }}
                  >
                    <div>{t('guide1.letter')}</div>
                    <div>
                      <div>
                        <b>{t('guide1.subText')}</b>️ <br />
                        {t.rich('guide1.text', {
                          ul: (chunks) => <ul>{chunks}</ul>,
                          li: (chunks) => <li>{chunks}</li>,
                          important: (chunks) => <b>{chunks}</b>,
                          firstName: journey?.user?.firstName,
                        })}
                      </div>
                      <CustomButton
                        onClick={() => {
                          resetFields();
                          setSex('female');
                          setBirthdate('2003-04-17');
                        }}
                        buttonText="Remplir"
                      />
                    </div>
                  </div>
                  <div className={`${styles.inputGroup}`}>
                    <RadioButtons
                      legend={t('sex')}
                      name="radio"
                      orientation="horizontal"
                      options={[
                        {
                          label: t('female'),
                          nativeInputProps: {
                            value: 'female',
                            checked: sex === 'female',
                            onChange: () => setSex('female'),
                          },
                        },
                        {
                          label: t('male'),
                          nativeInputProps: {
                            value: 'male',
                            checked: sex === 'male',
                            onChange: () => setSex('male'),
                          },
                        },
                      ]}
                      state="default"
                    />
                    <Input
                      label={t('birthdate')}
                      nativeInputProps={{
                        type: 'date',
                        onChange: (e) => {
                          setBirthdate(e.target.value);
                        },
                        value: birthdate,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.separator} style={{ marginBottom: '2rem' }}>
                <span className={styles.orText}>{t('middleText')}</span>
              </div>

              <div className={`${styles.containerInputs} ${styles.oneChild}`}>
                <div className={styles.tip} style={{ borderColor: colorTip }}>
                  <div
                    style={{
                      backgroundColor: colorTip,
                    }}
                  >
                    <div>{t('guide2.letter')}</div>
                    <div>
                      <div>
                        <b>{t('guide2.subText')}</b>️ <br />
                        {t.rich('guide2.text', {
                          important: (chunks) => <b>{chunks}</b>,
                          firstName: journey?.user?.firstName,
                        })}
                      </div>
                      <CustomButton
                        onClick={() => {
                          resetFields();
                          setIne('12345678');
                        }}
                        buttonText="Remplir"
                      />
                    </div>
                  </div>
                  <div className={`fr-input-group ${styles.inputGroup}`}>
                    <Input
                      hintText=""
                      label={t('ine')}
                      state="default"
                      stateRelatedMessage=""
                      nativeInputProps={{
                        onChange: (e) => {
                          setIne(e.target.value);
                        },
                        value: ine,
                      }}
                    />
                  </div>
                </div>
              </div>
              <Alert
                closable
                title={t('alertTitle')}
                description={t('alertDescription')}
                // onClose={function noRefCheck() {}}
                severity="info"
                small
                style={{ marginTop: '3.5rem', marginBottom: '1.5rem' }}
              />
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  disabled={(birthdate === '' || sex === '') && ine === ''}
                  size="large"
                  onClick={() => {
                    if (sex === 'female' && birthdate === '2003-04-17') {
                      router.push('/' + journey?.type + '/upload?user=' + journey?.user?.id);
                    }
                    if (ine == '12345678') {
                      router.push('/' + journey?.type + '/verification/erreur?user=' + journey?.user?.id);
                    }
                  }}
                  iconId="fr-icon-arrow-right-line"
                  iconPosition="right"
                >
                  {t('button')}
                </Button>
              </div>
            </div>
          </div>

          <div style={{ flex: '35%', paddingLeft: '60px' }} className={styles.card}>
            <CardSocialPricing />
          </div>
        </div>
      </div>
      <Tooltip isOpenedByDefault={true}>
        <ul>
          <li>
            <i className={fr.cx('ri-information-fill')} /> Pour reccueillir les informations avec API Particulier sans
            FranceConnect,{' '}
            <b>
              il est nécessaire de demander à l’usager de renseigner les paramètres d’appel de
              l’API concernée.
            </b>{' '}
            <i>
              Ici, pour l’API statut étudiant, il s’agit des noms, prénoms, sexe et date de naissance, ou du numéro INE.
              Ces modalités d’appel sont documentées, comme pour toutes les API, dans la{' '}
              <a
                href="https://particulier.api.gouv.fr/catalogue/mesri/statut_etudiant#parameters_details"
                target="_blank"
                rel="noreferrer"
              >
                fiche métier de l’API
              </a>
            </i>
            . <br />
            <br />
            Pour en savoir plus sur les paramètres obligatoires et les modalités d’appels, lire les recommandations
            suivantes...
          </li>
          <li>
            <b>
              Certains paramètres d’appel sont obligatoires, d’autres facultatifs. Nous vous recommandons d’appliquer
              les conditions indiquées dans la fiche métier de chaque API.
            </b>
            <br />
            <ul>
              <li>
                <b>Respecter les paramètres obligatoires :</b> Si un paramètre est indiqué comme obligatoire dans la
                documentation d’une API, c’est qu’il est indispensable pour que l’appel soit effectué.
              </li>
              <li>
                <b>Respecter les paramètres facultatifs :</b> Il peut être tentant d’obliger l’usager à remplir tous les
                champs. En effet, la saisie d’un maximum de champs permet de maximiser les chances de trouver le
                particulier dans la base du fournisseur de la donnée. Toutefois,{' '}
                <b>rendre les paramètres obligatoires peut exclure des utilisateurs</b>.{' '}
                <i>
                  Par exemple, certaines personnes n’ont pas de prénom ; d’autres n’ont pas de nom de famille ; d’autres
                  n’ont pas de jour de naissance, etc.
                </i>
              </li>
            </ul>
          </li>
          <li>
            <b>Proposer différentes modalités d’appel quand l’API le permet</b>
            <br />
            <i>
              Comme ici pour l’API Statut Étudiant, il est proposé à l’usager de renseigner sa civilité ou son numéro
              INE.
            </i>{' '}
            Proposer différentes modalités d’appel augmente le taux de succès des appels.
          </li>
        </ul>
        <ul></ul>
      </Tooltip>
    </>
  );
}
