'use client';

import styles from '@/components/BackgroundImage.module.css';

export default function BackgroundImage({ children, url = '' }: { children: JSX.Element; url?: string }) {
  return (
    <>
      <div className={styles.backgroundImage} style={{ backgroundImage: 'url("' + url + '")' }}>
        {children}
      </div>
    </>
  );
}
