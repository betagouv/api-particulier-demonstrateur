import { Button } from '@codegouvfr/react-dsfr/Button';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
  const t = useTranslations('Verification');
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h3>{t('loadingTitle')}</h3>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
        <p style={{ marginTop: '1rem' }}>{t('loadingText')}</p>
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
        <Button disabled={true} size="large" iconId="fr-icon-arrow-right-line" iconPosition="right">
          {t('success.button')}
        </Button>
      </div>
    </>
  );
}
