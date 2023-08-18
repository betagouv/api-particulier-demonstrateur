'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Tooltip.module.css';
import { fr } from '@codegouvfr/react-dsfr';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { useTranslations } from 'next-intl';
import Button from '@codegouvfr/react-dsfr/Button';

type DisabledActions = {
  home: boolean;
  back: boolean;
};

export default function Tooltip({
  children,
  disabledActions = { home: false, back: false },
}: {
  children?: JSX.Element;
  disabledActions?: DisabledActions;
}) {
  const router = useRouter();
  const t = useTranslations('Tooltip');
  const theme = useColors();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpenBtnHovered, setIsOpenBtnHovered] = useState(false);
  const [isBackBtnHovered, setIsBackBtnHovered] = useState(false);
  const [isHomeBtnHovered, setIsHomeBtnHovered] = useState(false);

  const bgColorDisabledBackBtn = fr.colors.getHex({ isDark: !theme.isDark }).options.grey._925_125.default;
  const bgColorHoveredBackBtn = fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.hover;
  const bgColorDefaultBackBtn = fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default;
  const bgColorNotDisabledBackBtn = isBackBtnHovered ? bgColorHoveredBackBtn : bgColorDefaultBackBtn;
  const bgColorBackButton = disabledActions.back ? bgColorDisabledBackBtn : bgColorNotDisabledBackBtn;

  useEffect(() => {
    const spacing = isVisible && containerRef?.current?.offsetHeight ? containerRef?.current?.offsetHeight : 0;
    document.body.style.paddingBottom = spacing + 'px';
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
          <span onMouseEnter={() => setIsBackBtnHovered(true)} onMouseLeave={() => setIsBackBtnHovered(false)}>
            <Button
              disabled={disabledActions.back}
              className={styles.backButton}
              iconId="fr-icon-arrow-left-fill"
              onClick={() => router.back()}
              style={{
                color: fr.colors.getHex({ isDark: theme.isDark }).options.grey._200_850.default,
                backgroundColor: bgColorBackButton,
              }}
            >
              {t('backBtn')}
            </Button>
          </span>
          <span onMouseEnter={() => setIsHomeBtnHovered(true)} onMouseLeave={() => setIsHomeBtnHovered(false)}>
            <Button
              disabled={disabledActions.home}
              style={{
                color: disabledActions.home
                  ? fr.colors.getHex({ isDark: !theme.isDark }).options.grey._625_425.default
                  : fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default,
                boxShadow:
                  'inset 0 0 0 1px ' +
                  (disabledActions.home
                    ? 'transparent'
                    : fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default),
                backgroundColor: isHomeBtnHovered
                  ? disabledActions.home
                    ? 'transparent'
                    : fr.colors.getHex({ isDark: !theme.isDark }).options.grey._1000_50.default
                  : 'transparent',
              }}
              className={styles.homeButton}
              iconId="fr-icon-home-4-fill"
              onClick={() => router.push('/')}
              priority="secondary"
            >
              {t('homeBtn')}
            </Button>
          </span>
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
    </>
  );
}
