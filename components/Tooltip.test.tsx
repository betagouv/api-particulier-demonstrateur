import { render } from '@testing-library/react';
import Tooltip from './Tooltip';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));

describe('Tooltip component', () => {
  it('should render with correct text', async () => {
    const { getByText } = render(<Tooltip />);

    const titleElement = getByText('title');
    expect(titleElement).toBeInTheDocument();

    const backBtnElement = getByText('backBtn');
    expect(backBtnElement).toBeInTheDocument();

    const homeBtnElement = getByText('homeBtn');
    expect(homeBtnElement).toBeInTheDocument();
  });
});
