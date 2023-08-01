import { useTranslation } from '@/i18n/index';

interface Params {
  lng: string;
}

interface PageProps {
  params: Params;
}

export default async function Home({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, 'home');

  return <h1>{t('title')}</h1>;
}
