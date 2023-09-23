import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
  it('renders without crashing', () => {
    render(<Loading />);
  });

  it('displays the translated loading title and text', () => {
    const { getByText } = render(<Loading />);
    expect(getByText('loadingTitle')).toBeInTheDocument();
    expect(getByText('loadingText')).toBeInTheDocument();
  });

  it('renders the button with the correct attributes and content', () => {
    const { getByRole } = render(<Loading />);
    const button = getByRole('button', { name: 'success.button' });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('renders the LinearProgress component', () => {
    const { getByRole } = render(<Loading />);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });
});
