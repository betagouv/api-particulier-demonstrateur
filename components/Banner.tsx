'use client';
import React from 'react';
import styles from './Banner.module.css';
import { useTranslations } from 'next-intl';
import { fr } from '@codegouvfr/react-dsfr';
import { useColors } from '@codegouvfr/react-dsfr/useColors';

function Banner() {
  const theme = useColors();
  const t = useTranslations('Banner');

  return (
    <div
      className={styles.banner}
      style={{
        color: fr.colors.getHex({ isDark: !theme.isDark }).options.grey._50_1000.default,
        backgroundColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default,
      }}
    >
      <span className={styles.mobileTitle}>{t('mobileTitle')}</span>
      <span className={styles.webTitle}>{t('webTitle')}</span>
    </div>
  );
}

export default Banner;
