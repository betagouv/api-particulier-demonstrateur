import { render } from '@testing-library/react';
import Page from './page';

describe('Page component', () => {
  it('affiche le titre correct', async () => {
    const { getByText } = render(<Page />);

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();
  });
});
