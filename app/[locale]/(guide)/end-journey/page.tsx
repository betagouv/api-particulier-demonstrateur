'use client';

import Tooltip from '@/components/Tooltip';
import { useJourney } from '@/app/journey-provider';
import { Button } from '@codegouvfr/react-dsfr/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from '../styles.module.css';

export default function Page() {
  const t = useTranslations('End-journey');
  const { journey } = useJourney();

  return (
    <div className={styles.container}>
      <h2>{t('title')}</h2>
      <Button
        size="large"
        style={{ margin: '10px' }}
        /*onClick={function noRefCheck() {}}*/
        priority="secondary"
      >
        <Link href="">
          {/** TODO - configure a dynamic name */}
          {t('button1', { user: journey?.user?.firstName })}
        </Link>
      </Button>

      <Button
        size="large"
        /*onClick={function noRefCheck() {}}*/
        priority="secondary"
      >
        <Link href="/">{t('button2')}</Link>
      </Button>
      <Tooltip />
    </div>
  );
}
