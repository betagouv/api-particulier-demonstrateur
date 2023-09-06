'use client';

import styles from './page.module.css';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';
import { useJourney } from '@/app/journey-provider';
import { useRouter } from 'next/navigation';

export default function ConnectionConfirmation() {
  const router = useRouter();
  const t = useTranslations('Confirmation-connexion');
  const { journey } = useJourney();

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
          imgUrl: '/images/logo_france_connect.png',
          orientation: 'horizontal',
        }}
      />
      <Banner />
      <div className={styles.content}>
        <p className={styles.text}>{t('title')}</p>
        <h1 className={styles.name}>{journey?.user?.firstName + ' ' + journey?.user?.lastName}</h1>
        <Button
          size="large"
          onClick={() => router.push('/verification/succes')}
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          priority="primary"
          style={{ marginBottom: '70px' }}
        >
          {t('button')}
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
