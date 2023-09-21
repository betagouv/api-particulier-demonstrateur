import { render } from '@testing-library/react';
import Loading from './loading';

jest.mock('@/components/Loading', () => {
  return function MockedLoadingComponent() {
    return <div>Mocked Loading Component</div>;
  };
});

describe('Loading component', () => {
  it('renders LoadingComponent', () => {
    const { getByText } = render(<Loading />);
    expect(getByText('Mocked Loading Component')).toBeInTheDocument();
  });
});
