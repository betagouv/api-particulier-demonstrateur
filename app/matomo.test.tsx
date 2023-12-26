import { render } from '@testing-library/react';
import { MatomoTracker } from './matomo';

describe('MatomoTracker', () => {
  beforeEach(() => {
    const doc = document.implementation.createHTMLDocument('test doc');
    document.createElement = jest.fn().mockImplementation((tagName) => doc.createElement(tagName));
    document.getElementsByTagName = jest.fn().mockImplementation(() => [
      {
        parentNode: {
          insertBefore: jest.fn(),
        },
      },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add matomo script', () => {
    render(<MatomoTracker />);

    expect(document.createElement).toHaveBeenCalledWith('script');
  });
});
