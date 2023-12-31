'use client';

import styles from '@/app/[locale]/(guide)/styles.module.css';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';
import { useJourney } from '@/app/journey-provider';
import { useEffect } from 'react';
import { Journey } from '@/app/types';

export default function Index() {
  const t = useTranslations('UsageAndUser');
  const { setJourney } = useJourney();

  useEffect(() => {
    setJourney(null as Journey);
  }, [setJourney]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={`fr-h2 ${styles.title}`}>{t('title')}</h1>
        <h2 className={`fr-h1 ${styles.subtitle}`}>{t('titleUsage')} </h2>
        <div className={styles.cards}>
          <Card
            className={styles.card}
            start={
              <ul className="fr-tags-group">
                <li>
                  <Tag small>{t('tags.socialPricing')}</Tag>
                </li>
              </ul>
            }
            desc={t('cards.transport.desc')}
            enlargeLink
            linkProps={{
              href: '/transport/choix-personnage',
            }}
            title={t('cards.transport.title')}
          />
          <Card
            className={styles.card}
            start={
              <ul className="fr-tags-group">
                <li>
                  <Tag small>{t('tags.solidarityPricing')}</Tag>
                </li>
              </ul>
            }
            desc={t('cards.cantine.desc')}
            enlargeLink
            linkProps={{
              href: '/cantine/choix-personnage',
            }}
            title={t('cards.cantine.title')}
          />
        </div>
      </main>
      <Tooltip
        disabledActions={{ back: true, home: true }}
        isOpenedByDefault={false}
        hiddenUseCase={true}
        hiddenUser={true}
      ></Tooltip>
    </div>
  );
}
