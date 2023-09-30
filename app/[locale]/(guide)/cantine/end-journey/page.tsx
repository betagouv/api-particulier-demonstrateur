/* eslint-disable indent */
'use client';

import Tooltip from '@/components/Tooltip';
import { useJourney } from '@/app/journey-provider';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import styles from '../../styles.module.css';
import { useRouter } from 'next/navigation';

export default function Page() {
  const t = useTranslations('End-journey');
  const { journey } = useJourney();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h2>{t('title')}</h2>
      <Button
        size="large"
        style={{ margin: '10px' }}
        onClick={() =>
          router.push(
            journey?.user?.id && journey.user.id.includes('bis')
              ? '/' + journey?.type + '/verification?user=' + journey.user.id.replace('bis', '') + '&scope=qfMSA'
              : '/' + journey?.type + '/verification?user=' + journey?.user?.id + 'bis&scope=qfMSA',
          )
        }
        priority="secondary"
      >
        {journey?.user?.id && journey.user.id.includes('bis')
          ? t.rich('button1.cantine.withGoodStatus', {
              user: journey?.user?.firstName,
              important: (chunks) => <b>{chunks}</b>,
            })
          : t.rich('button1.cantine.withWrongStatus', {
              user: journey?.user?.firstName,
              important: (chunks) => <b>{chunks}</b>,
            })}
      </Button>

      <Button size="large" onClick={() => router.push('/')} priority="secondary">
        {t('button2')}
      </Button>
      <Tooltip isOpenedByDefault={false} />
    </div>
  );
}
