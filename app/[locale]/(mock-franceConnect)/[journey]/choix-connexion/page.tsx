'use client';

import styles from './page.module.css';
import { Header } from '@codegouvfr/react-dsfr/Header';
import Image from 'next/image';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';
import { useSearchParams } from 'next/navigation';
import Tooltip from '@/components/Tooltip';

export default function ConnectionChoice() {
  const searchParams = useSearchParams();
  const { journey } = useJourney();
  const t = useTranslations('Choix-connexion');
  const router = useRouter();

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
          href: {},
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
          onClick={() =>
            router.push(
              '/' +
                journey?.type +
                '/impot-connexion?user=' +
                journey?.user?.id +
                '&scope=' +
                searchParams.get('scope'),
            )
          }
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          priority="secondary"
        >
          {t('overlayText.button')}
        </Button>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h3 className={styles.title}>{t('title')}</h3>

        <h1 className={styles.subtitle}>{t('subTitle')} </h1>

        <div className={styles.rectangleContainer}>
          <div className={styles.rectangle}>
            <Image src="/images/impots_gouv_fr.svg" width={280} height={131} alt="Logo DGFIP" />
          </div>
          <div className={styles.rectangle}>
            <Image src="/images/assurance-maladie.png" width={280} height={131} alt="Logo Assurance Maladie" />
          </div>
          <div className={styles.rectangle}>
            <Image src="/images/yris.png" alt="Logo YRIS" width={280} height={131} style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </div>
      <Tooltip isOpenedByDefault={false} />
    </>
  );
}
