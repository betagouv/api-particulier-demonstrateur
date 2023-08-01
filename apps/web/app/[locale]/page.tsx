'use client';

import { useTranslations } from 'next-intl';

export default async function Page() {
  const t = useTranslations('Index');

  return <h1>{t('title')}</h1>;
}
