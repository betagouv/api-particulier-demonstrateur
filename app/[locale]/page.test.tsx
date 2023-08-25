import { renderWithProvider } from '@/utils/test.utils';
import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should have correct number of components', async () => {
    const { container } = renderWithProvider(<Page />);

    const cardElement = container.querySelectorAll('.fr-card');
    const tagElements = container.querySelectorAll('.fr-tag');
    const link1 = container.querySelectorAll('a[href="/choix-personnage?usage=1"]');
    const link2 = container.querySelectorAll('a[href="/choix-personnage?usage=2"]');

    expect(link1.length).toBe(1);
    expect(link2.length).toBe(1);
    expect(cardElement.length).toBe(2);
    expect(tagElements.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
