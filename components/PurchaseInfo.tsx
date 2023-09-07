import React from 'react';
import { fr } from '@codegouvfr/react-dsfr';
import styles from './BackgroundImage.module.css';

interface PurchaseInfoProps {
  title?: string;
  style?: React.CSSProperties;
}

export default function PurchaseInfo({ title = '', style = {} }: PurchaseInfoProps) {
  return (
    <div className={styles.backgroundImage} style={style}>
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
        <h1 style={{ maxWidth: '700px', overflowWrap: 'break-word', lineHeight: '1.2', marginBottom: 0 }}>{title}</h1>
      </div>
    </div>
  );
}
