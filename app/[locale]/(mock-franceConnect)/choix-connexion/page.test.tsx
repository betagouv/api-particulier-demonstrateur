import Page from './page';
import { renderWithProvider } from '@/utils/test.utils';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('ConnectionChoice component', () => {
  it('should render components', async () => {
    const { container, getByText, getAllByText } = renderWithProvider(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const headerElement = container.querySelector('.fr-header');

    const overlayTextTitleElement = getByText('overlayText.title');
    const overlayButtonElement = getByText('overlayText.button');
    const titleElements = getAllByText('title');
    const subTitleElement = getByText('subTitle');
    const lien = container.querySelector('a[href="/impot-connexion"]');

    expect(lien).toBeInTheDocument();
    expect(buttonElement).toHaveClass('fr-btn');
    expect(headerElement).toHaveClass('fr-header');
    expect(titleElements.length).toBe(2);
    expect(subTitleElement).toBeInTheDocument();
    expect(overlayTextTitleElement).toBeInTheDocument();
    expect(overlayButtonElement).toBeInTheDocument();
  });
});
