import { render } from '@testing-library/react';
import HighlightSubscription from './HighlightSubscription';

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

describe('HighlightSubscription component', () => {
  it('should render Highlight composant', async () => {
    const { container } = render(<HighlightSubscription />);

    const highlightElement = container.querySelector('.fr-highlight');

    expect(highlightElement).toHaveClass('fr-highlight');
  });

  it('should render text correctly', async () => {
    const { getByText } = render(<HighlightSubscription />);

    const priceElement = getByText('price');
    const socialTariffElement = getByText('socialTariff');
    const subContentElement = getByText('subContent');

    expect(priceElement).toBeInTheDocument();
    expect(socialTariffElement).toBeInTheDocument();
    expect(subContentElement).toBeInTheDocument();
  });
});
