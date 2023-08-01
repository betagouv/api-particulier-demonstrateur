import { useTranslation } from '@/i18n/index';

interface Params {
  lng: string;
}

interface PageProps {
  params: Params;
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t }: { t: any } = await useTranslation(lng);

  return <h1>{t('title')}</h1>;
}
