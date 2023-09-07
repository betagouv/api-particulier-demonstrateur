'use client';

import styles from '../styles.module.css';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';
import { useSearchParams } from 'next/navigation';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { useJourney } from '@/app/journey-provider';
import { Journey } from '@/app/types';

export default function Index() {
  const theme = useColors();
  const searchParams = useSearchParams();
  const usage = searchParams.get('usage');
  const t = useTranslations('UsageAndUser');

  const { setJourney } = useJourney();

  return (
    <div className={styles.container}>
      <Banner />
      <main className={styles.main}>
        <h1 className={`fr-h2 ${styles.title}`}>{t('title')}</h1>
        <h2 className={`fr-h1 ${styles.subtitle}`}>{t('titleUser')} </h2>
        <div className={styles.cards}>
          {usage === '1' ? (
            <>
              <div
                role="button"
                onClick={() =>
                  setJourney(
                    (prev: Journey) =>
                      ({
                        ...prev,
                        user: {
                          firstName: 'Henri',
                          lastName: 'Dupont',
                          // eslint-disable-next-line quotes
                          description: "Henri, demandeur d'emploi",
                          isFranceConnectAuth: true,
                        },
                      }) as Journey,
                  )
                }
              >
                <Card
                  className={styles.card}
                  start={
                    <>
                      <ul className="fr-tags-group">
                        <li>
                          <Tag
                            small
                            style={{
                              backgroundColor: theme.decisions.background.contrast.warning.hover,
                            }}
                          >
                            {t('tags.FranceConnect')}
                          </Tag>
                        </li>
                        <li>
                          <Tag small>{t('tags.cantine')}</Tag>
                        </li>
                      </ul>
                      <span>{t('scenario', { number: 1 })}</span>
                    </>
                  }
                  desc={t('cards.user1.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/transport/souscription',
                  }}
                  title={t('cards.user1.title')}
                />
              </div>
              <div
                role="button"
                onClick={() =>
                  setJourney(
                    (prev: Journey) =>
                      ({
                        ...prev,
                        user: {
                          firstName: 'Juliette',
                          lastName: 'Lejeune',
                          description: 'Juliette, étudiante',
                          isFranceConnectAuth: false,
                        },
                      }) as Journey,
                  )
                }
              >
                <Card
                  className={styles.card}
                  start={
                    <>
                      <ul className="fr-tags-group">
                        <li>
                          <Tag small>{t('tags.cantine')}</Tag>
                        </li>
                      </ul>
                      <span>{t('scenario', { number: 2 })}</span>
                    </>
                  }
                  desc={t('cards.user2.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/transport/souscription',
                  }}
                  title={t('cards.user2.title')}
                />
              </div>
            </>
          ) : (
            <>
              <div
                role="button"
                onClick={() =>
                  setJourney(
                    (prev: Journey) =>
                      ({
                        ...prev,
                        user: {
                          firstName: 'Camille',
                          lastName: 'Dubois',
                          description: 'Camille, quotient familial MSA de 320',
                          isFranceConnectAuth: true,
                        },
                      }) as Journey,
                  )
                }
              >
                <Card
                  className={styles.card}
                  start={
                    <>
                      <ul className="fr-tags-group">
                        <li>
                          <Tag
                            small
                            style={{
                              backgroundColor: theme.decisions.background.contrast.warning.hover,
                            }}
                          >
                            {t('tags.FranceConnect')}
                          </Tag>
                        </li>
                        <li>
                          <Tag small>{t('tags.transportCard')}</Tag>
                        </li>
                      </ul>
                      <span>{t('scenario', { number: 1 })}</span>
                    </>
                  }
                  desc={t('cards.user3.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/cantine/souscription',
                  }}
                  title={t('cards.user3.title')}
                />
              </div>
              <div
                role="button"
                onClick={() =>
                  setJourney(
                    (prev: Journey) =>
                      ({
                        ...prev,
                        user: {
                          firstName: 'Kevin',
                          lastName: 'Durand',
                          description: 'Kevin, quotient familial MSA de 750',
                          isFranceConnectAuth: false,
                        },
                      }) as Journey,
                  )
                }
              >
                <Card
                  className={styles.card}
                  start={
                    <>
                      <ul className="fr-tags-group">
                        <li>
                          <Tag small>{t('tags.transportCard')}</Tag>
                        </li>
                      </ul>
                      <span>{t('scenario', { number: 2 })}</span>
                    </>
                  }
                  desc={t('cards.user4.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/cantine/souscription',
                  }}
                  title={t('cards.user4.title')}
                />
              </div>
            </>
          )}
        </div>
      </main>
      <Tooltip isOpenedByDefault={false} hiddenUser={true}></Tooltip>
    </div>
  );
}
