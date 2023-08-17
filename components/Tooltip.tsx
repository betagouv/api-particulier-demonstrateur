import React, { useState, useRef, useEffect } from 'react';
import styles from './Tooltip.module.css';
import { fr } from '@codegouvfr/react-dsfr';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { useTranslations } from 'next-intl';
import Button from '@codegouvfr/react-dsfr/Button';

export default function Tooltip({ children }: { children: JSX.Element }) {
  const t = useTranslations('Tooltip');
  const theme = useColors();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpenBtnHovered, setIsOpenBtnHovered] = useState(false);

  const [spacingPage, setSpacingPage] = useState('0px');

  useEffect(() => {
    const spacing = isVisible && containerRef?.current?.offsetHeight ? containerRef?.current?.offsetHeight : 0;
    setSpacingPage(spacing + 'px');
  }, [isVisible, containerRef]);

  return (
    <>
      <div
        className={`${styles.tooltipContainer} ${isVisible ? styles.active : ''} ${theme.isDark ? styles.dark : ''}`}
        style={{
          color: fr.colors.getHex({ isDark: !theme.isDark }).options.grey._200_850.default,
          backgroundColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance._925_125.default,
        }}
        ref={containerRef}
      >
        <div
          className={styles.title}
          style={{
            color: fr.colors.getHex({ isDark: !theme.isDark }).options.grey._50_1000.default,
          }}
        >
          {t('title')}
        </div>
        {children}
        <div className={styles.buttons}>
          <Button
            iconId="fr-icon-arrow-left-fill"
            disabled
            style={{
              color: fr.colors.getHex({ isDark: theme.isDark }).options.grey._200_850.default,
              backgroundColor: isOpenBtnHovered
                ? fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.hover
                : fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default,
            }}
          >
            {t('previousBtn')}
          </Button>
          <Button
            className={styles.backButton}
            iconId="fr-icon-home-4-fill"
            disabled
            onClick={function noRefCheck() {}}
            priority="secondary"
          >
            {t('homeBtn')}
          </Button>
        </div>
        <button className={styles.closeBtn} onClick={() => setIsVisible(!isVisible)}>
          <i className={fr.cx('fr-icon-close-line')} />
        </button>
      </div>
      <button
        className={`${styles.openBtn} ${isVisible ? '' : styles.active}`}
        onClick={() => setIsVisible(!isVisible)}
        style={{
          backgroundColor: isOpenBtnHovered
            ? fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.hover
            : fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default,
        }}
        onMouseEnter={() => setIsOpenBtnHovered(true)}
        onMouseLeave={() => setIsOpenBtnHovered(false)}
      >
        <i className={fr.cx('ri-lightbulb-flash-line')} />
      </button>
      <div style={{ marginBottom: spacingPage }}></div>
    </>
  );
}
