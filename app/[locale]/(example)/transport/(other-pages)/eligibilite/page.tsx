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
          <Stepper currentStep={1} nextTitle={t('stepperNextTitle')} stepCount={4} title={t('stepperTitle')} />
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
      <Tooltip />
    </>
  );
}
