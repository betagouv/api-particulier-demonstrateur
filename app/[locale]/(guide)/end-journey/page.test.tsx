import { renderWithProvider } from '@/utils/test.utils';

import Page from './page';
import Tooltip from '@/components/Tooltip';

jest.mock('@/components/Tooltip');

describe('Page component', () => {
  it('should calls correct components', async () => {
    const { container, getByText } = renderWithProvider(<Page />);

    const buttonElement = container.querySelectorAll('.fr-btn');
    const linkElement = container.querySelector('a[href="/"]');

    const titleElement = getByText('title');
    const button1Element = getByText('button1');
    const button2Element = getByText('button2');

    expect(titleElement).toBeInTheDocument();
    expect(button1Element).toBeInTheDocument();
    expect(button2Element).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(buttonElement.length).toBe(2);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});
