'use client';

import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Upload } from '@codegouvfr/react-dsfr/Upload';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { useTranslations } from 'next-intl';
import { useJourney } from '@/app/journey-provider';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Page() {
  const t = useTranslations('Verification');
  const { journey } = useJourney();
  const router = useRouter();
  return (
    <>
      <Alert
        closable
        title={t('error.title.studentWithoutFranceConnect')}
        description={
          t.rich('error.desc.studentWithoutFranceConnect', {
            p: (chunks) => <p>{chunks}</p>,
            link: (chunks) => (
              <div
                style={{ display: 'inline-block', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => router.push('/' + journey?.type + '/formulaire?user=' + journey?.user?.id)}
              >
                {chunks}
              </div>
            ),
          }) ?? undefined
        }
        // onClose={function noRefCheck() {}}
        severity="warning"
        style={{ marginBottom: '20px' }}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <Upload label={t('error.upload.studentProof')} />
      </div>
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
      <div className={styles.rightElement}>
        <Button
          size="large"
          // onClick={function noRefCheck() {}}
          iconId="fr-icon-arrow-right-line"
          iconPosition="right"
          onClick={() => router.push('/' + journey?.type + '/upload?user=' + journey?.user?.id + '&error=true')}
        >
          {t('error.transportErrorButton')}
        </Button>
      </div>
      <div
        className={styles.rightElement}
        style={{
          paddingTop: '2rem',
        }}
      >
        <a className="fr-link fr-icon-arrow-right-line fr-link--icon-right" href="#">
          {t('links.transport.withoutFranceConnect.viewShops')}
        </a>
      </div>
      <div
        className={styles.rightElement}
        style={{
          paddingBottom: '3rem',
        }}
      >
        <a className="fr-link fr-icon-arrow-right-line fr-link--icon-right" href="#">
          {t('links.transport.withoutFranceConnect.withoutPrice')}
        </a>
      </div>
    </>
  );
}
