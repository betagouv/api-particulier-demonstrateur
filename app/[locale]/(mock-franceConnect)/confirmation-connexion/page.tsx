'use client';

import styles from './page.module.css';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { useTranslations } from 'next-intl';
import Tooltip from '@/components/Tooltip';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';
import Link from 'next/link';

export default function ConnectionConfirmation() {
  const t = useTranslations('Confirmation-connexion');

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
      <div className={styles.content}>
        <p className={styles.text}>{t('title')}</p>
        <h1 className={styles.name}>{t('subTitle')}</h1>
        <Button
          size="large"
          // onClick={function noRefCheck() {}}
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          priority="primary"
          style={{ marginBottom: '70px' }}
        >
          <Link href="/verification/succes">{t('button')}</Link>
        </Button>

        <Accordion
          className={styles.accordion}
          label={t('accordionTitle')} /*onExpandedChange={function noRefCheck() {}}*/
        >
          <ul style={{ textAlign: 'left', fontWeight: 'bold' }}>
            <li>{t('accordionContent1')}</li>
            <li>{t('accordionContent2')}</li>
            <li>{t('accordionContent3')}</li>
            <li>{t('accordionContent4')}</li>
            <li>{t('accordionContent5')}</li>
            <li>{t('accordionContent6')}</li>
            <li>{t('accordionContent7')}</li>
            <li>{t('accordionContent8')}</li>
          </ul>
        </Accordion>
      </div>
      <Tooltip />
    </>
  );
}
