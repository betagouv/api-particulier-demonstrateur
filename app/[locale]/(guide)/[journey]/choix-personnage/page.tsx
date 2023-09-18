'use client';

import styles from '../../styles.module.css';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';
import Banner from '@/components/Banner';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { useJourney } from '@/app/journey-provider';

export default function Index() {
  const theme = useColors();
  const t = useTranslations('UsageAndUser');
  const { journey } = useJourney();

  return (
    <div className={styles.container}>
      <Banner />
      <main className={styles.main}>
        <h1 className={`fr-h2 ${styles.title}`}>{t('title')}</h1>
        <h2 className={`fr-h1 ${styles.subtitle}`}>{t('titleUser')} </h2>
        <div className={styles.cards}>
          {journey?.type ? (
            journey.type === 'transport' ? (
              <>
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
                          <Tag small>{t('tags.transport')}</Tag>
                        </li>
                      </ul>
                      <span>{t('scenario', { number: 1 })}</span>
                    </>
                  }
                  desc={t('cards.user1.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/transport/souscription?user=1',
                  }}
                  title={t('cards.user1.title')}
                />
                <Card
                  className={styles.card}
                  start={
                    <>
                      <ul className="fr-tags-group">
                        <li>
                          <Tag small>{t('tags.transport')}</Tag>
                        </li>
                      </ul>
                      <span>{t('scenario', { number: 2 })}</span>
                    </>
                  }
                  desc={t('cards.user2.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/transport/souscription?user=2',
                  }}
                  title={t('cards.user2.title')}
                />
              </>
            ) : (
              <>
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
                  desc={t('cards.user3.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/cantine/souscription?user=3',
                  }}
                  title={t('cards.user3.title')}
                />

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
                  desc={t('cards.user4.desc')}
                  enlargeLink
                  linkProps={{
                    href: '/cantine/souscription?user=4',
                  }}
                  title={t('cards.user4.title')}
                />
              </>
            )
          ) : null}
        </div>
      </main>
      <Tooltip isOpenedByDefault={false} hiddenUser={true}></Tooltip>
    </div>
  );
}
