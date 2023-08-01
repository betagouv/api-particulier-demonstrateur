import { render } from '@testing-library/react';
import Page from './page';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: any) => key,
}));

describe('Page component', () => {
  it('affiche le titre correct', async () => {
    const { getByText } = render(<Page />);

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();
  });
});
