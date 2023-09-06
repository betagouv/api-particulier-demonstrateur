import Page from './page';
import { renderWithProvider } from '@/utils/test.utils';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('ConnectionImpot component', () => {
  it('should render components', async () => {
    const { container, getByText, getByPlaceholderText, getByRole } = renderWithProvider(<Page />);
    const buttonElement = container.querySelectorAll('.fr-btn');
    const headerElement = container.querySelector('.fr-header');

    const overlayTextTitleElement = getByText('overlayText.title');
    const overlayButtonElement = getByText('overlayText.button');
    const overlayTitleBoldElement = getByText('overlayText.titleBold');

    const rectangleLeftTitleElement = getByText('rectangleLeft.title');

    const rectangleLeftPlaceholderElement = getByPlaceholderText('rectangleLeft.inputPlaceholder');
    const rectangleLeftButtonElement = getByText('rectangleLeft.button');

    const rectangleRightTitleElement = getByText('rectangleRight.title');
    const rectangleRightContent1Element = getByText('rectangleRight.content1');
    const rectangleRightContent2Element = getByText('rectangleRight.content2');
    const rectangleRightContent3Element = getByText('rectangleRight.content3');
    const rectangleRightContent4Element = getByText('rectangleRight.content4');

    const link = getByRole('link', { name: /rectangleLeft.button/i });
    expect(link).toBeInTheDocument();

    expect(buttonElement.length).toBe(6);
    expect(headerElement).toHaveClass('fr-header');

    expect(overlayTextTitleElement).toBeInTheDocument();
    expect(overlayButtonElement).toBeInTheDocument();
    expect(overlayTitleBoldElement).toBeInTheDocument();

    expect(rectangleLeftTitleElement).toBeInTheDocument();
    expect(rectangleLeftPlaceholderElement).toBeInTheDocument();
    expect(rectangleLeftButtonElement).toBeInTheDocument();

    expect(rectangleRightTitleElement).toBeInTheDocument();
    expect(rectangleRightContent1Element).toBeInTheDocument();
    expect(rectangleRightContent2Element).toBeInTheDocument();
    expect(rectangleRightContent3Element).toBeInTheDocument();
    expect(rectangleRightContent4Element).toBeInTheDocument();
  });
});
