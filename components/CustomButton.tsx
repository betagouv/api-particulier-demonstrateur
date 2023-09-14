import React, { useEffect, useState } from 'react';
import { fr, FrCxArg } from '@codegouvfr/react-dsfr';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import styles from './CustomButton.module.css';

interface ButtonProps {
  disabled: boolean;
  onClick: () => void;
  iconClass: FrCxArg;
  className?: string;
  buttonText?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ disabled, onClick, iconClass, className, buttonText }) => {
  const theme = useColors();
  const [isHovered, setIsHovered] = useState(false);
  const [bgColor, setBgColor] = useState<string>();
  const buttonClassName = `${styles.customButton} ${className || ''}`;

  const bgColorDisabled = fr.colors.getHex({ isDark: !theme.isDark }).options.grey._925_125.default;
  const bgColorHovered = fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.hover;
  const bgColorDefault = fr.colors.getHex({ isDark: !theme.isDark }).options.blueFrance.sun113_625.default;

  const bgColorNotDisabled = isHovered ? bgColorHovered : bgColorDefault;

  useEffect(() => {
    const color = isHovered && !disabled ? bgColorHovered : disabled ? bgColorDisabled : bgColorNotDisabled;
    setBgColor(color);
  }, [bgColorDisabled, bgColorHovered, bgColorNotDisabled, disabled, isHovered]);

  return (
    <button
      disabled={disabled}
      className={buttonClassName}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: fr.colors.getHex({ isDark: theme.isDark }).options.grey._200_850.default,
        backgroundColor: bgColor,
      }}
    >
      {buttonText && <span className={styles.buttonText}>{buttonText}</span>}
      {iconClass && <i className={fr.cx(iconClass)} />}
    </button>
  );
};

export default CustomButton;
