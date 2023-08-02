'use client';

import { useTranslations } from 'next-intl';

export default function Subscription() {
  const t = useTranslations('Subscription');

  return <h1>{t('title')}</h1>;
}
