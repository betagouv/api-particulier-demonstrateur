import { fr } from '@codegouvfr/react-dsfr';
import { useTranslations } from 'next-intl';
import styles from './BackgroundImage.module.css';

export default function PurchaseInfo() {
  const t = useTranslations('Souscription');

  return (
    <div className={styles.backgroundImage}>
      <div
        className={'fr-container'}
        style={{
          zIndex: 1,
          position: 'relative',
          ...fr.spacing('padding', {
            top: '15v',
            bottom: '15v',
          }),
          width: '100%',
        }}
      >
        <h1 style={{ maxWidth: '700px', overflowWrap: 'break-word', lineHeight: '1.2' }}>{t('title')}</h1>
      </div>
    </div>
  );
}
