'use client';

import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useTranslations } from 'next-intl';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useRouter } from 'next/navigation';
import { useJourney } from '@/app/journey-provider';
import { useSearchParams } from 'next/navigation';
import { Upload } from '@codegouvfr/react-dsfr/Upload';

type Props = {
  status: any;
};

export default function Status({ status }: Props) {
  const t = useTranslations('Verification');
  const searchParams = useSearchParams();
  const { journey } = useJourney();
  const router = useRouter();

  const scope = searchParams.get('scope');

  return (
    <>
      {status !== (null || undefined) && (
        <>
          {status ? (
            <>
              <Alert
                closable
                title={t('success.infoTitle.' + scope)}
                description={t('success.infoDescription.' + scope)}
                // onClose={function noRefCheck() {}}
                severity="info"
                small
              />
              <Alert
                closable
                description={t.rich('success.successDescription.' + scope, {
                  important: (chunks) => <b>{chunks}</b>,
                })}
                // onClose={function noRefCheck() {}}
                severity="success"
                title={t('success.successTitle')}
              />
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
                  onClick={() => router.push('/' + journey?.type + '/end-journey?user=' + journey?.user?.id)}
                >
                  {t('success.button')}
                </Button>
              </div>
            </>
          ) : (
            <>
              <Alert
                closable
                title={t('error.title.' + scope)}
                description={t('error.desc.' + scope)}
                // onClose={function noRefCheck() {}}
                severity="warning"
                small
                style={{ marginBottom: '20px' }}
              />
              <div style={{ marginTop: '2rem' }}>
                {t.rich('error.text', {
                  important: (chunks) => <b>{chunks}</b>,
                })}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Upload label={t('error.upload.' + scope)} />
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
                  onClick={() => router.push('/' + journey?.type + '/end-journey?user=' + journey?.user?.id)}
                >
                  {t('error.button')}
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
