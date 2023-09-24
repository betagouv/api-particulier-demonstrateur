'use client';

import Tooltip from '@/components/Tooltip';
import { useJourney } from '@/app/journey-provider';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import styles from '../../styles.module.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const t = useTranslations('End-journey');
  const { journey } = useJourney();
  const router = useRouter();
  const searchParams = useSearchParams();
  const scope = searchParams.get('scope');

  return (
    <div className={styles.container}>
      <h2>{t('title')}</h2>
      <Button
        size="large"
        style={{ margin: '10px' }}
        onClick={() =>
          router.push(
            '/' +
              journey?.type +
              '/eligibilite?user=' +
              journey?.user?.id +
              (scope === 'jobSeeker' ? '&scope=studentScholarship' : '&scope=jobSeeker'),
          )
        }
        priority="secondary"
      >
        {scope === 'jobSeeker'
          ? t('button1.transport.withWrongStatus', { user: journey?.user?.firstName })
          : t('button1.transport.withGoodStatus', { user: journey?.user?.firstName })}
      </Button>

      <Button size="large" onClick={() => router.push('/')} priority="secondary">
        {t('button2')}
      </Button>
      <Tooltip />
    </div>
  );
}
