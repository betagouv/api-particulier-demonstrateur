import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
import { useTranslations } from 'next-intl';

export default function HighlightSubscription() {
  const t = useTranslations('HighlightSubscription');

  return (
    <Highlight size="lg" style={{ margin: 0 }}>
      {/** Using span with br because Hydration failed. Indeed, HighLight component use already <p> for children.*/}
      <span style={{ fontSize: '30px' }}>{t('price')}</span>
      <br />
      <span style={{ fontSize: '20px', margin: 0 }}>{t('socialTariff')}</span>
      <br />
      <span style={{ fontSize: '15px', fontWeight: 'normal' }}>{t('subContent')}</span>
      <br />
    </Highlight>
  );
}
