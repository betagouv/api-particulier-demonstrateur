import React, { useState, ReactElement, useEffect } from 'react';
import styles from './Tips.module.css';
import { useTranslations } from 'next-intl';
import ToggleButton from './ToggleButton';
import CustomButton from './CustomButton';

interface Props {
  children?: [ReactElement?, ReactElement?];
}

export default function Tips({ children = [undefined, undefined] }: Props) {
  const t = useTranslations('Tips');

  const [isDeveloperMode, setIsDeveloperMode] = useState(children[0]?.props.children ? false : true);

  const [tips, setTips] = useState<ReactElement[]>([]);
  const [tip, setTip] = useState<ReactElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    tips.length > 1 ? setIsNextBtnDisabled(false) : setIsNextBtnDisabled(true);
  }, [tips]);

  useEffect(() => {
    index < tips.length - 1 ? setIsNextBtnDisabled(false) : setIsNextBtnDisabled(true);
    index > 0 && tips.length > 1 ? setIsPreviousBtnDisabled(false) : setIsPreviousBtnDisabled(true);
    setTip(tips[index]);
  }, [tips, index]);

  useEffect(() => {
    const tips =
      isDeveloperMode || !children[0]?.props.children ? children[1]?.props.children : children[0]?.props.children;
    const tipsArray = Array.isArray(tips) ? tips : [tips];
    setTips(tipsArray);
  }, [children, isDeveloperMode]);

  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false);
  const [isPreviousBtnDisabled, setIsPreviousBtnDisabled] = useState(true);

  const handleDeveloperModeChange = () => {
    setIsDeveloperMode(!isDeveloperMode);
  };

  return (
    <div className={styles.tips}>
      <div className={styles.tip}>{tip}</div>
      <div className={styles.buttons}>
        <div>
          {children[0]?.props.children && children[1]?.props.children ? (
            <ToggleButton isChecked={isDeveloperMode} onChange={handleDeveloperModeChange} />
          ) : null}
        </div>
        <CustomButton
          disabled={isPreviousBtnDisabled}
          onClick={() => {
            if (index !== 0) setIndex(index - 1);
          }}
          iconClass={['ri-arrow-left-s-line']}
          className={styles.previousButton}
        />
        <CustomButton
          disabled={isNextBtnDisabled}
          onClick={() => {
            if (index + 1 < tips.length) setIndex(index + 1);
          }}
          className={styles.nextButton}
          buttonText={t('next')}
          iconClass={['ri-arrow-right-s-line']}
        />
      </div>
    </div>
  );
}
