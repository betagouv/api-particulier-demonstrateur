'use client';

import { useTranslations } from 'next-intl';

export default async function Page() {
  const t = useTranslations('Home');

  return <h1>{t('title')}</h1>;
}
