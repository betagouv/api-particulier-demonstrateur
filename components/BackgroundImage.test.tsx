import { render } from '@testing-library/react';
import BackgroundImage from './BackgroundImage';

describe('BackgroundImage', () => {
  it('should apply the backgroundImage class', () => {
    const { container } = render(
      <BackgroundImage>
        <span>Test child</span>
      </BackgroundImage>,
    );

    expect(container.firstChild).toHaveClass('backgroundImage');
  });

  it('should set the backgroundImage style with provided url', () => {
    const testUrl = 'http://example.com/test-image.jpg';
    const { container } = render(
      <BackgroundImage url={testUrl}>
        <span>Test child</span>
      </BackgroundImage>,
    );

    expect(container.firstChild).toHaveStyle(`backgroundImage: url("${testUrl}")`);
  });

  it('should render children correctly', () => {
    const childText = 'Test child';
    const { getByText } = render(
      <BackgroundImage url="testUrl">
        <span>{childText}</span>
      </BackgroundImage>,
    );

    expect(getByText(childText)).toBeInTheDocument();
  });
});
