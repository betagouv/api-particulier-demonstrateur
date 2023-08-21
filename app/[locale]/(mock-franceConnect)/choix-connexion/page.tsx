'use client';

import styles from './page.module.css';
import { Header } from '@codegouvfr/react-dsfr/Header';
import Image from 'next/image';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ConnectionChoice() {
  const t = useTranslations('Choix-connexion');

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
          imgUrl: 'https://upload.wikimedia.org/wikipedia/fr/d/d6/Logo_FranceConnect_en_2018.png',
          orientation: 'horizontal',
        }}
      />
      <div className={styles.textOverlay}>
        <p>{t('overlayText.title')}</p>
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
        <h3 className={styles.title}>{t('title')}</h3>

        <h1 className={styles.subtitle}>{t('subTitle')} </h1>

        <div className={styles.rectangleContainer}>
          <div className={styles.rectangle}>
            <Image src="/images/impots.gouv.jpg" width={300} height={140} alt="" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.rectangle}>
            <Image src="/images/assurance-maladie.png" width={300} height={140} alt="" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.rectangle}>
            <Image src="/images/yris.png" alt="" width={300} height={140} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </>
  );
}
