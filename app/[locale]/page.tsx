'use client';

import styles from './page.module.css';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div className={styles.container}>
      <Banner />
      <main className={styles.main}>
        <h2 className={styles.title}>{t('title')}</h2>
        <h3 className={styles.subtitle}>{t('subTitle')} </h3>
        <div className={styles.cards}>
          <div
            className="container"
            style={{
              width: 280,
            }}
          >
            <Card
              style={{ height: 350, color: 'black' }}
              start={
                <ul className="fr-badges-group">
                  <li>
                    <Badge style={{ backgroundColor: '#fcd7d7', fontWeight: 'normal' }} small>
                      {t('badgeFC')}
                    </Badge>
                  </li>
                  <li>
                    <Badge style={{ fontWeight: 'normal' }} small>
                      {t('badgeTSociale')}
                    </Badge>
                  </li>
                </ul>
              }
              desc={t('cards.henri.desc')}
              enlargeLink
              imageAlt="texte alternatif de l’image"
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.henri.title')}
            />
          </div>
          <div
            className="container"
            style={{
              width: 280,
            }}
          >
            <Card
              start={
                <Badge style={{ fontWeight: 'normal' }} small>
                  {t('badgeTSociale')}
                </Badge>
              }
              style={{ height: 350, color: 'black' }}
              desc={t('cards.juliette.desc')}
              enlargeLink
              imageAlt="texte alternatif de l’image"
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.juliette.title')}
            />
          </div>
          <div
            className="container"
            style={{
              width: 280,
            }}
          >
            <Card
              start={
                <ul className="fr-badges-group">
                  <li>
                    <Badge style={{ backgroundColor: '#fcd7d7', fontWeight: 'normal' }} small>
                      {t('badgeFC')}
                    </Badge>
                  </li>
                  <li>
                    <Badge style={{ fontWeight: 'normal' }} small>
                      {t('badgeTSolidaire')}
                    </Badge>
                  </li>
                </ul>
              }
              style={{ height: 350, color: 'black' }}
              desc={t('cards.camille.desc')}
              enlargeLink
              imageAlt="texte alternatif de l’image"
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.camille.title')}
            />
          </div>
          <div
            className="container"
            style={{
              width: 280,
            }}
          >
            <Card
              start={
                <Badge style={{ fontWeight: 'normal' }} small>
                  {t('badgeTSolidaire')}
                </Badge>
              }
              style={{ height: 350, color: 'black' }}
              desc={t('cards.kevin.desc')}
              enlargeLink
              imageAlt="texte alternatif de l’image"
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.kevin.title')}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
