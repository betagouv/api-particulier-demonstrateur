'use client';

import { Button } from '@codegouvfr/react-dsfr/Button';
import { Upload } from '@codegouvfr/react-dsfr/Upload';
import { useTranslations } from 'next-intl';
import { useJourney } from '@/app/journey-provider';
import { useRouter } from 'next/navigation';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import styles from './page.module.css';

export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const t = useTranslations('Verification');
  const { journey } = useJourney();
  const router = useRouter();
  return (
    <>
      <div>
        <Upload label={t('error.upload.identityProof')} />
      </div>
      <div style={{ marginTop: '1.5rem' }}>{t('error.textBis')}</div>
      <div className={styles.rightElement}>
        <Tag
          iconId="ri-timer-fill"
          linkProps={{
            href: '#',
          }}
        >
          {t('delay.transport')}
        </Tag>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '20px',
          paddingBottom: '50px',
        }}
      >
        <Button
          size="large"
          // onClick={function noRefCheck() {}}
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          onClick={() =>
            router.push(
              '/' +
                journey?.type +
                '/end-journey-without-france-connect?user=' +
                journey?.user?.id +
                (searchParams.error ? '&error=true' : ''),
            )
          }
        >
          {t('error.transportSendButton')}
        </Button>
      </div>
    </>
  );
}
