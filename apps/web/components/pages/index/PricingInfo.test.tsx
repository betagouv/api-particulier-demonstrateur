import { render } from '@testing-library/react';
import PricingInfo from './PricingInfo';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    const t = (key: string) => key;
    t.rich = (key: string, replacements: { br: Function }) => {
      if (replacements && replacements.br) {
        replacements.br();
      }
      return key;
    };
    return t;
  },
}));

describe('PricingInfo component', () => {
  it('should render with correct text', async () => {
    const { getByText } = render(<PricingInfo />);

    const titleElement = getByText('content.title');
    const socialTariffElement = getByText('content.socialTariff');
    const priceElement = getByText('content.price');
    const contentSubContentElement = getByText('content.subContent');

    expect(contentSubContentElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(socialTariffElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
