'use client';

import Tooltip from '@/components/Tooltip';
import { useJourney } from '@/app/journey-provider';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import styles from '../../styles.module.css';
import { useRouter } from 'next/navigation';

export default function Page() {
  const t = useTranslations('Choice-journey');
  const { journey } = useJourney();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h2>{t('title')}</h2>
      <Button
        size="large"
        style={{ margin: '10px' }}
        onClick={() => router.push('/' + journey?.type + '/verification?user=' + journey?.user?.id + '&scope=qfMSA')}
        priority="secondary"
      >
        {t.rich('button.withGoodStatus', {
          important: (chunks) => <b>{chunks}</b>,
        })}
      </Button>
      <Button
        size="large"
        style={{ margin: '10px' }}
        onClick={() => router.push('/' + journey?.type + '/verification?user=' + journey?.user?.id + 'bis&scope=qfMSA')}
        priority="secondary"
      >
        {t.rich('button.withWrongStatus', {
          important: (chunks) => <b>{chunks}</b>,
        })}
      </Button>
      <Tooltip />
    </div>
  );
}
