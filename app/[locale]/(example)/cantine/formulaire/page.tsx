'use client';

import React, { useState } from 'react';
import { Stepper } from '@codegouvfr/react-dsfr/Stepper';
import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';
import CardUnitedPricing from '@/components/CardUnitedPricing';
import Tooltip from '@/components/Tooltip';
import styles from './page.module.css';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import CustomButton from '@/components/CustomButton';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const t = useTranslations('Formulaire-Cantine');
  const router = useRouter();
  const { journey } = useJourney();
  const theme = useColors();

  const colorTip = fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default;

  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const [birthdate, setBirthdate] = useState<string>(error ? (error === 'true' ? '2000-11-05' : '1984-06-23') : '');
  const [sex, setSex] = useState<string>(error ? (error === 'true' ? 'female' : 'male') : '');
  const [birthPlace, setBirthPlace] = useState<string>(error ? (error === 'true' ? '49000' : '49007') : '');

  const resetFields = () => {
    setBirthdate('');
    setSex('');
    setBirthPlace('');
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
            currentStep={2}
            nextTitle={t('stepperNextTitle')}
            stepCount={journey?.user?.isFranceConnectAuth ? 2 : 3}
            title={t('stepperTitle')}
          />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '65%' }}>
            <div style={{ position: 'relative' }}>
              <p>{t('text')}</p>
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
                    <div>
                      <div>{t('guide1.letter')}</div>
                      <div>
                        <div>
                          <b>{t('guide1.subText')}</b>️ <br />
                          {t.rich('guide1.text', {
                            ul: (chunks) => <ul>{chunks}</ul>,
                            li: (chunks) => <li>{chunks}</li>,
                            important: (chunks) => <b>{chunks}</b>,
                            firstName: journey?.user?.firstName || '',
                          })}
                        </div>
                        <CustomButton
                          onClick={() => {
                            resetFields();
                            setSex('male');
                            setBirthdate('1984-06-23');
                            setBirthPlace('49007');
                          }}
                          buttonText="Remplir"
                        />
                      </div>
                    </div>
                    <div>
                      <div>{t('guide2.letter')}</div>
                      <div>
                        <div>
                          <b>{t('guide2.subText')}</b>️ <br />
                          {t.rich('guide2.text', {
                            important: (chunks) => <b>{chunks}</b>,
                            firstName: journey?.user?.firstName || '',
                          })}
                        </div>
                        <CustomButton
                          onClick={() => {
                            resetFields();
                            setSex('female');
                            setBirthdate('2000-11-05');
                            setBirthPlace('49000');
                          }}
                          buttonText="Remplir"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.inputGroup}`} style={{ paddingBottom: 0 }}>
                    <RadioButtons
                      legend={t('sex')}
                      hintText="* Champ obligatoire"
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
                  <div className={`${styles.inputGroupBirthPlace} ${styles.lastInputGroup}`}>
                    <div className={`${styles.inputGroup}`}>
                      <Input
                        hintText="* Champ obligatoire"
                        label={t('birthPlace')}
                        state="default"
                        stateRelatedMessage=""
                        nativeInputProps={{
                          onChange: (e) => {
                            setBirthPlace(e.target.value);
                          },
                          value: birthPlace,
                        }}
                      />
                    </div>
                    <div className={`${styles.codeCodeHelpGroup}`}>
                      <i className={fr.cx('ri-information-fill')} />
                      <span className={`${styles.codeCodeHelpLabel}`}>Comment retrouver mon code COG&nbsp;? </span>
                      <i className={fr.cx('ri-arrow-down-s-line')} />
                    </div>
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
                style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
              />
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  disabled={birthdate === '' || sex === '' || birthPlace === ''}
                  size="large"
                  onClick={() => {
                    if (sex === 'male' && birthdate === '1984-06-23' && birthPlace === 'Angers') {
                      router.push('/' + journey?.type + '/upload?user=' + journey?.user?.id);
                    } else if (!(birthdate === '' || sex === '' || birthPlace === '')) {
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
            <CardUnitedPricing />
          </div>
        </div>
      </div>

      <Tooltip isOpenedByDefault={true}>
        <ul>
          <li>
            <i className={fr.cx('ri-information-fill')} />{' '}
            <b>
              Pour reccueillir les informations avec API Particulier sans FranceConnect, il est nécessaire de demander à
              l’usager de renseigner les paramètres d’appel de l’API concernée.
            </b>{' '}
            <i>
              Ici, pour l’API Quotient familial CAF & MSA, il s’agit des noms, prénoms, sexe, date de naissance et lieu
              de naissance de l’allocataire. Ces modalités d’appel sont documentées, comme pour toutes les API, dans la{' '}
              <a
                href="https://particulier.api.gouv.fr/catalogue/cnaf-msa/quotient_familial_v2#parameters_details"
                target="_blank"
                rel="noreferrer"
              >
                fiche métier de l’API
              </a>
            </i>
            . <br />
            <br />
            <i className={fr.cx('ri-information-fill')} />{' '}
            <b>
              Pour faciliter la saisie du champ <i>&quot;Code COG du lieu de naissance&quot;</i> ,{' '}
              <a
                href="https://particulier.api.gouv.fr/blog/parametre-lieu-naissance-code-cog"
                target="_blank"
                rel="noreferrer"
              >
                veuillez lire ce guide
              </a>
            </b>
            . En effet, le code COG est inconnu des usagers !
            <br />
            <br />
            <i className={fr.cx('ri-information-fill')} />{' '}
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
        </ul>
        <ul></ul>
      </Tooltip>
    </>
  );
}
