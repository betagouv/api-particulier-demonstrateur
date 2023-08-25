'use client';

import common from '../common.module.css';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useColors } from '@codegouvfr/react-dsfr/useColors';

export default function Index() {
  const theme = useColors();
  const searchParams = useSearchParams();
  const usage = searchParams.get('usage');
  const t = useTranslations('UsageAndUser');

  return (
    <div className={common.container}>
      <main className={common.main}>
        <h1 className={`fr-h2 ${common.title}`}>{t('title')}</h1>
        <h2 className={`fr-h1 ${common.subtitle}`}>{t('titleUser')} </h2>
        <div className={common.cards}>
          {usage === '1' ? (
            <>
              <Card
                className={common.card}
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
                        <Tag small>{t('tags.canteen')}</Tag>
                      </li>
                    </ul>
                    <span>{t('scenario', { number: 1 })}</span>
                  </>
                }
                desc={t('cards.henri.desc')}
                enlargeLink
                linkProps={{
                  href: '/souscription',
                }}
                title={t('cards.henri.title')}
              />
              <Card
                className={common.card}
                start={
                  <>
                    <ul className="fr-tags-group">
                      <li>
                        <Tag small>{t('tags.canteen')}</Tag>
                      </li>
                    </ul>
                    <span>{t('scenario', { number: 2 })}</span>
                  </>
                }
                desc={t('cards.juliette.desc')}
                enlargeLink
                linkProps={{
                  href: '/souscription',
                }}
                title={t('cards.juliette.title')}
              />
            </>
          ) : (
            <>
              <Card
                className={common.card}
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
                desc={t('cards.camille.desc')}
                enlargeLink
                linkProps={{
                  href: '/souscription',
                }}
                title={t('cards.camille.title')}
              />
              <Card
                className={common.card}
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
                desc={t('cards.kevin.desc')}
                enlargeLink
                linkProps={{
                  href: '/souscription',
                }}
                title={t('cards.kevin.title')}
              />
            </>
          )}
        </div>
      </main>
      <Tooltip isOpenedByDefault={false}></Tooltip>
    </div>
  );
}
