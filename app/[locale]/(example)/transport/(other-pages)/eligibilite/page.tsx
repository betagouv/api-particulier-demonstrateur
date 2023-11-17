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
import { useSearchParams } from 'next/navigation';
import RadioButton from '@/components/RadioButton';
import { useColors } from '@codegouvfr/react-dsfr/useColors';

export default function Page() {
  const searchParams = useSearchParams();
  const t = useTranslations('Eligibilite');
  const router = useRouter();
  const { journey } = useJourney();
  const theme = useColors();

  const colorTip = fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default;

  const [selectedValue, setSelectedValue] = useState<string | undefined | null>(
    searchParams.get('user') === '2' ? 'student' : searchParams.get('scope') || 'jobSeeker',
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
    e.preventDefault();
    setSelectedValue(value);
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
            currentStep={1}
            nextTitle={t('stepperNextTitle')}
            stepCount={journey?.user?.isFranceConnectAuth ? 3 : 4}
            title={t('stepperTitle')}
          />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '65%' }}>
            <div style={{ position: 'relative' }}>
              <p>{t('checkboxLegend')}</p>
              {journey?.user?.id === '1' ? (
                <div
                  className={styles.tip}
                  style={{ borderColor: colorTip }}
                  onClick={(e) => handleClick(e, 'jobSeeker')}
                >
                  <RadioButton
                    name="status"
                    value="jobSeeker"
                    selectedValue={selectedValue}
                    text={t('checkboxLabel1')}
                  ></RadioButton>
                  <div style={{ backgroundColor: colorTip }}>
                    <div>{t('guide1.letter')}</div>
                    <div>
                      <div>{t('guide1.text')}</div>
                      <div>
                        <b>{t('guide1.subText')}</b>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <RadioButton
                  disabled={true}
                  name="status"
                  value="jobSeeker"
                  selectedValue={selectedValue}
                  text={t('checkboxLabel1')}
                ></RadioButton>
              )}
              {journey?.user?.id === '2' ? (
                <div className={styles.tip} style={{ borderColor: colorTip }}>
                  <RadioButton
                    disabled={true}
                    name="status"
                    value="student"
                    selectedValue={selectedValue}
                    text={t('checkboxLabel2')}
                  ></RadioButton>
                </div>
              ) : (
                <RadioButton
                  disabled={true}
                  name="status"
                  value="student"
                  selectedValue={selectedValue}
                  text={t('checkboxLabel2')}
                ></RadioButton>
              )}
              {journey?.user?.id === '1' ? (
                <div
                  className={styles.tip}
                  style={{ borderColor: colorTip }}
                  onClick={(e) => handleClick(e, 'studentScholarship')}
                >
                  <RadioButton
                    name="status"
                    value="studentScholarship"
                    selectedValue={selectedValue}
                    text={t('checkboxLabel3')}
                  ></RadioButton>
                  <div style={{ backgroundColor: colorTip }}>
                    <div>{t('guide2.letter')}</div>
                    <div>
                      <div>{t('guide2.text')}</div>
                      <div>
                        <b>{t('guide2.subText')}</b>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <RadioButton
                  disabled={true}
                  name="status"
                  value="studentScholarship"
                  selectedValue={selectedValue}
                  text={t('checkboxLabel3')}
                ></RadioButton>
              )}
              <RadioButton
                disabled={true}
                name="status"
                value="c2s"
                selectedValue={selectedValue}
                text={t('checkboxLabel4')}
              ></RadioButton>
              <RadioButton
                disabled={true}
                name="status"
                value="aucun"
                selectedValue={selectedValue}
                text={t('checkboxLabel5')}
              ></RadioButton>
              <div className={styles.choiceB}></div>
            </div>
            <Alert
              closable
              title={t('alertTitle')}
              description={t('alertDescription')}
              // onClose={function noRefCheck() {}}
              severity="info"
              small
              style={{ marginTop: '2rem', marginBottom: '1.5rem' }}
            />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                disabled={selectedValue === undefined}
                size="large"
                onClick={() =>
                  router.push('/' + journey?.type + '/connexion?user=' + journey?.user?.id + '&scope=' + selectedValue)
                }
                iconId="fr-icon-arrow-right-line"
                iconPosition="right"
              >
                {t('button')}
              </Button>
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
            <i className={fr.cx('ri-information-fill')} />{' '}
            <b>Dans le cadre d’une tarification en fonction du statut de l’usager, nous vous recommandons</b> :
            <ul>
              <li>
                <b>de laisser l’usager choisir lui-même son statut.</b> Cela permettant d’éviter d’imposer un choix par
                défaut à l’usager. <br />
                <i>
                  Par exemple, si un particulier est concerné par deux statuts, lui laisser le choix permet à l’usager
                  de privilégier autant le statut au meilleur tarif que le statut qu’il pense garder plus longtemps pour
                  éviter d’avoir à entreprendre à nouveau la démarche.
                </i>
              </li>
              <li>
                <b>de demander le choix du statut avant la page de connexion</b> pour appeler ultérieurement uniquement
                les données du statut concerné.
                <br />
                <i>
                  De façon générale, il est toujours préférable d’appeler les données strictement nécessaires pour des
                  raisons de rapidité et de protection des données personnelles.
                </i>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <i className={fr.cx('ri-information-fill')} />{' '}
              <b>Nous vous recommandons d’expliquer au maximum les mécanismes de traitement des données à l’usager</b> :
              <br />
              <i>
                Ici, cela s’illustre par la présence d’un panneau indiquant que les informations de l’usager vont être
                transmises pour vérifier son statut.
              </i>
              <br />
              La dématérialisation de l’information ne doit pas opacifier le fonctionnement des démarches.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <i className={fr.cx('ri-information-fill')} />{' '}
            <b>
              Cet écran de choix du statut préfigure le choix des API du bouquet API Particulier qui seront
              utilisées&nbsp;:
            </b>
            <ul>
              <li>
                <b>Demandeur d’emploi&nbsp;:</b>{' '}
                <a
                  href="https://particulier.api.gouv.fr/catalogue/pole_emploi/situation"
                  target="_blank"
                  rel="noreferrer"
                >
                  API Statut demandeur d’emploi
                </a>{' '}
                ;
              </li>
              <li>
                <b>Étudiant&nbsp;:</b>{' '}
                <a
                  href="https://particulier.api.gouv.fr/catalogue/mesri/statut_etudiant"
                  target="_blank"
                  rel="noreferrer"
                >
                  API Statut étudiant
                </a>{' '}
                ;
              </li>
              <li>
                <b>Étudiant boursier&nbsp;:</b>{' '}
                <a
                  href="https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier"
                  target="_blank"
                  rel="noreferrer"
                >
                  API Statut étudiant boursier
                </a>{' '}
                ;
              </li>
              <li>
                <b>Bénficiaire de la C2S&nbsp;:</b>{' '}
                <a
                  href="https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire"
                  target="_blank"
                  rel="noreferrer"
                >
                  API Complémentaire santé solidaire
                </a>{' '}
                ;
              </li>
            </ul>
          </li>
        </ul>
      </Tooltip>
    </>
  );
}
