import { render, screen } from '@testing-library/react';
import HighlightSubscription from './HighlightSubscription';

describe('HighlightSubscription component', () => {
  it('should render Highlight component', async () => {
    const { container, getByText } = render(
      <HighlightSubscription title="fake_title" content="fake_content" subContent="fake_sub_content" />,
    );

    const highlightElement = container.querySelector('.fr-highlight');
    expect(highlightElement).toHaveClass('fr-highlight');

    const titleElement = getByText('fake_title');
    const contentElement = getByText('fake_content');
    const subContentElement = getByText('fake_sub_content');

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(subContentElement).toBeInTheDocument();
  });

  it('should render with undefined texts', async () => {
    const { container } = render(<HighlightSubscription />);
    const spanElements = container.querySelectorAll('span');
    expect(spanElements.length).toBe(3);
  });
});
