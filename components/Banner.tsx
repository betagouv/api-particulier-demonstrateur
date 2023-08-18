import React from 'react';
import styles from './Banner.module.css';
import { useTranslations } from 'next-intl';

function Banner() {
  const t = useTranslations('Banner');

  return (
    <div className={styles.bandeau}>
      <span className={styles.mobileTitle}>{t('mobileTitle')}</span>
      <span className={styles.webTitle}>{t('webTitle')}</span>
    </div>
  );
}

export default Banner;
