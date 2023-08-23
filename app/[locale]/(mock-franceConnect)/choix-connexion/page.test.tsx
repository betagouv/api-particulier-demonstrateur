import { render } from '@testing-library/react';
import Page from './page';

describe('ConnectionChoice component', () => {
  it('should render components', async () => {
    const { container, getByText } = render(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const headerElement = container.querySelector('.fr-header');

    const overlayTextTitleElement = getByText('overlayText.title');
    const overlayButtonElement = getByText('overlayText.button');
    const titleElement = getByText('title');
    const subTitleElement = getByText('subTitle');
    const lien = container.querySelector('a[href="/impot-connexion"]');

    expect(lien).toBeInTheDocument();
    expect(buttonElement).toHaveClass('fr-btn');
    expect(headerElement).toHaveClass('fr-header');
    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
    expect(overlayTextTitleElement).toBeInTheDocument();
    expect(overlayButtonElement).toBeInTheDocument();
  });
});
