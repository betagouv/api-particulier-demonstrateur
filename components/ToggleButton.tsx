import React from 'react';
import styles from './ToggleButton.module.css';
import { fr } from '@codegouvfr/react-dsfr';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import { useTranslations } from 'next-intl';

interface Props {
  isChecked: boolean;
  onChange: (_isChecked: boolean) => void;
}

export default function ToggleButton(props: Props) {
  const theme = useColors();
  const t = useTranslations('ToggleButton');
  const handleCheckboxChange = () => {
    const newCheckedState = !props.isChecked;
    props.onChange(newCheckedState);
  };
  return (
    <div className={styles.container} onClick={handleCheckboxChange}>
      <div className={styles.buttonContainer}>
        <div
          className={styles.button}
          style={{
            backgroundColor: fr.colors.getHex({ isDark: !theme.isDark }).options.grey._1000_50.default,
            borderColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default,
          }}
        >
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={props.isChecked}
            onChange={handleCheckboxChange}
          />
          <div
            className={styles.knobs}
            style={{
              color: fr.colors.getHex({ isDark: !theme.isDark }).options.grey._50_1000.default,
              backgroundColor: fr.colors.getHex({ isDark: !theme.isDark }).options.grey._1000_50.default,
              borderColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default,
            }}
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              xmlns="http://www.w3.org/2000/svg"
              fill={fr.colors.getHex({ isDark: !theme.isDark }).options.grey._50_1000.default}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M14 6.5L10.7001 9.56421L9.87525 8.79829L12.3503 6.5L9.87525 4.20171L10.7001 3.43579L14 6.5ZM1.64967 6.5L4.12475 8.79829L3.29992 9.56421L0 6.5L3.29992 3.43579L4.12417 4.20171L1.64967 6.5ZM5.70967 11.375H4.46833L8.29033 1.625H9.53167L5.70967 11.375Z"
              />
            </svg>
          </div>
          <div
            className={styles.layer}
            style={{
              backgroundColor: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default,
            }}
          ></div>
        </div>
        <span
          className={styles.status}
          style={{
            color: fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default,
          }}
        >
          {props.isChecked ? t('checked') : t('unchecked')}
        </span>
      </div>
      <span className={styles.text}>{t('text')}</span>
    </div>
  );
}
