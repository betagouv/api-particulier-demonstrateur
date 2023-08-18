import React from 'react';
import { render } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  let originalGetInnerWidth: any;

  beforeAll(() => {
    originalGetInnerWidth = window.innerWidth;
  });

  afterAll(() => {
    Object.defineProperty(window, 'innerWidth', {
      value: originalGetInnerWidth,
    });
  });

  it('should displays mobile title if window width is less than 576', () => {
    Object.defineProperty(window, 'innerWidth', { value: 575 });

    const { getByText } = render(<Banner />);

    expect(getByText('mobileTitle')).toBeInTheDocument();
  });

  it('should displays web title if window width is 576 or more', () => {
    Object.defineProperty(window, 'innerWidth', { value: 576 });

    const { getByText } = render(<Banner />);

    expect(getByText('webTitle')).toBeInTheDocument();
  });
});
