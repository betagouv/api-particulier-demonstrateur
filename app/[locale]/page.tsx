'use client';

import styles from './page.module.css';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';
import { useJourney } from '@/app/journey-provider';
import { Journey } from '@/app/types';

export default function Index() {
  const t = useTranslations('Index');
  const theme = useColors();
  const { setJourney } = useJourney();

  const handleCardClick = (data: Journey) => {
    setJourney(data);
  };

  return (
    <div className={styles.container}>
      <Banner />
      <main className={styles.main}>
        <h2 className={styles.title}>{t('title')}</h2>
        <h3 className={styles.subtitle}>{t('subTitle')} </h3>
        <div className={styles.cards}>
          <div
            onClick={() =>
              handleCardClick({
                name: 'Henry',
                type: 'transport',
                description: 'job seeker',
                isFranceConnectAuth: true,
              })
            }
          >
            <Card
              className={styles.card}
              start={
                <ul className="fr-tags-group">
                  <li>
                    <Tag
                      style={{
                        backgroundColor: theme.decisions.background.contrast.warning.hover,
                      }}
                      small
                    >
                      {t('tagFC')}
                    </Tag>
                  </li>
                  <li>
                    <Tag small>{t('tagTSociale')}</Tag>
                  </li>
                </ul>
              }
              desc={t('cards.henri.desc')}
              enlargeLink
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.henri.title')}
            />
          </div>
          <div
            onClick={() =>
              handleCardClick({
                name: 'Juliette',
                type: 'transport',
                description: 'student',
                isFranceConnectAuth: false,
              })
            }
          >
            <Card
              className={styles.card}
              start={<Tag small>{t('tagTSociale')}</Tag>}
              desc={t('cards.juliette.desc')}
              enlargeLink
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.juliette.title')}
            />
          </div>
          <div
            onClick={() =>
              handleCardClick({
                name: 'Camille',
                type: 'cafeteria',
                description: 'family quotient of 320',
                isFranceConnectAuth: true,
              })
            }
          >
            <Card
              className={styles.card}
              start={
                <ul className="fr-tags-group">
                  <li>
                    <Tag
                      style={{
                        backgroundColor: theme.decisions.background.contrast.warning.hover,
                      }}
                      small
                    >
                      {t('tagFC')}
                    </Tag>
                  </li>
                  <li>
                    <Tag small>{t('tagTSolidaire')}</Tag>
                  </li>
                </ul>
              }
              desc={t('cards.camille.desc')}
              enlargeLink
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.camille.title')}
            />
          </div>
          <div
            onClick={() =>
              handleCardClick({
                name: 'Kevin',
                type: 'cafeteria',
                description: 'family quotient of of 750',
                isFranceConnectAuth: true,
              })
            }
          >
            <Card
              className={styles.card}
              start={<Tag small>{t('tagTSolidaire')}</Tag>}
              desc={t('cards.kevin.desc')}
              enlargeLink
              linkProps={{
                href: '/souscription',
              }}
              title={t('cards.kevin.title')}
            />
          </div>
        </div>
      </main>
      <Tooltip disabledActions={{ back: true, home: true }}></Tooltip>
    </div>
  );
}
