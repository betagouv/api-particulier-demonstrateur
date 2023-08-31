'use client';

import { Header } from '@codegouvfr/react-dsfr/Header';
import { useTranslations } from 'next-intl';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { Button } from '@codegouvfr/react-dsfr/Button';
import Link from 'next/link';

import styles from './page.module.css';

export default function ConnectionImpot() {
  const t = useTranslations('Impot-connexion');

  return (
    <>
      <Header
        brandTop={
          <>
            {t('header.brandTop1')}
            <br />
            {t('header.brandTop2')}
          </>
        }
        homeLinkProps={{
          href: '/',
          title: t('header.homeLinkPropsTitle'),
        }}
        id="fr-header-simple-header-with-service-title-and-tagline"
        operatorLogo={{
          alt: '[À MODIFIER - texte alternatif de l’image]',
          imgUrl: 'https://connective.b-cdn.net/wp-content/uploads/Assurance-Maladie-01.png',
          orientation: 'horizontal',
        }}
      />

      <div className={styles.textOverlay}>
        <p>
          {t('overlayText.title')}
          <span style={{ display: 'block', fontWeight: 'bold' }}>{t('overlayText.titleBold')}</span>
        </p>
        <Button
          size="large"
          // onClick={function noRefCheck() {}}
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          priority="secondary"
        >
          <Link href="/verification/succes">{t('overlayText.button')}</Link>
        </Button>
      </div>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangle}>
            <h3>{t('rectangleLeft.title')}</h3>
            <div className={styles.separatorLine}></div>
            <Input
              label=""
              style={{ textAlign: 'left', margin: '20px' }}
              hintText={t('rectangleLeft.inputTitle')}
              state="default"
              stateRelatedMessage="Text de validation / d'explication de l'erreur"
              nativeInputProps={{
                placeholder: t('rectangleLeft.inputPlaceholder'),
              }}
              iconId="fr-icon-lock-unlock-fill"
            />
            <Button style={{ color: 'grey' }} /*onClick={/function noRefCheck() {}}*/ priority="tertiary">
              <Link href="/verification/succes">{t('rectangleLeft.button')}</Link>
            </Button>
          </div>
          <div className={styles.rectangle}>
            <h3>{t('rectangleRight.title')}</h3>
            <div className={styles.separatorLine}></div>
            <a className={styles.clickableText}>
              <span className={styles.bulletPoint}></span>
              {t('rectangleRight.content1')}
            </a>
            <a className={styles.clickableText}>
              <span className={styles.bulletPoint}></span>
              {t('rectangleRight.content2')}
            </a>
            <a className={styles.clickableText}>
              <span className={styles.bulletPoint}></span>
              {t('rectangleRight.content3')}
            </a>
            <br />
            <div className={styles.separatorLine2}></div>
            <a className={styles.clickableText}>
              <span className={styles.bulletPoint}></span>
              {t('rectangleRight.content4')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
