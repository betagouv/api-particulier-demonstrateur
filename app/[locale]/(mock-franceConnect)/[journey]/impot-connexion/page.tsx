'use client';

import { Header } from '@codegouvfr/react-dsfr/Header';
import { useTranslations } from 'next-intl';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { Button } from '@codegouvfr/react-dsfr/Button';
import Tooltip from '@/components/Tooltip';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';
import { useSearchParams } from 'next/navigation';

import styles from './page.module.css';

export default function ConnectionImpot() {
  const searchParams = useSearchParams();
  const { journey } = useJourney();
  const t = useTranslations('Impot-connexion');
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
          href: '/',
          title: t('header.homeLinkPropsTitle'),
        }}
        id="fr-header-simple-header-with-service-title-and-tagline"
        operatorLogo={{
          alt: 'Logo impots.gouv.fr',
          imgUrl: '/images/impots_gouv_fr.svg',
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
          onClick={() =>
            router.push(
              '/' +
                journey?.type +
                '/confirmation-connexion?user=' +
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
            <Button style={{ color: 'grey' }} priority="tertiary">
              {t('rectangleLeft.button')}
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
      <Tooltip isOpenedByDefault={false} />
    </>
  );
}
