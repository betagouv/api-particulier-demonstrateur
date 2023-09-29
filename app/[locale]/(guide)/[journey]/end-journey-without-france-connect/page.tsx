/* eslint-disable indent */
'use client';

import Tooltip from '@/components/Tooltip';
import { useJourney } from '@/app/journey-provider';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import styles from '../../styles.module.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const t = useTranslations('End-journey-without-france-connect');
  const { journey } = useJourney();
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const type = journey?.type || 'transport';

  return (
    <div className={styles.container}>
      <h2>{t('title')}</h2>
      <p style={{ fontSize: '22px', lineHeight: '30px', maxWidth: '460px', textAlign: 'center' }}>
        {t('text', { user: journey?.user?.firstName })}
      </p>
      <Button
        size="large"
        style={{ margin: '10px' }}
        onClick={() =>
          router.push('/' + type + '/formulaire?user=' + journey?.user?.id + (error ? '&error=false' : '&error=true'))
        }
        priority="secondary"
      >
        {error
          ? t.rich('button1.' + type + '.withWrongStatus', {
              user: journey?.user?.firstName,
              b: (chunks) => <b>&nbsp;{chunks}</b>,
            })
          : t.rich('button1.' + type + '.withGoodStatus', {
              user: journey?.user?.firstName,
              b: (chunks) => <b>&nbsp;{chunks}</b>,
            })}
      </Button>

      <Button size="large" onClick={() => router.push('/')} priority="secondary">
        {t('button2')}
      </Button>
      <Tooltip />
    </div>
  );
}
