import { renderWithProvider, fireEvent, waitFor } from '@/utils/test.utils';
import Tooltip from './Tooltip';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));
jest.mock('@codegouvfr/react-dsfr/useColors', () => ({
  useColors: () => {
    return { isDark: false };
  },
}));

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    },
    writable: true,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('Tooltip component should render correctly', () => {
  const { getByText } = renderWithProvider(<Tooltip />);

  const titleElement = getByText('title');
  expect(titleElement).toBeInTheDocument();

  const backBtnElement = getByText('backBtn');
  expect(backBtnElement).toBeInTheDocument();

  const homeBtnElement = getByText('homeBtn');
  expect(homeBtnElement).toBeInTheDocument();
});

test('Back button click calls router.back', () => {
  const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
  const backMock = jest.fn();
  routerMock.mockReturnValue({ back: backMock });

  const { getByText } = renderWithProvider(<Tooltip />);
  const backButton = getByText('backBtn');
  fireEvent.click(backButton);

  expect(backMock).toHaveBeenCalledTimes(1);
});

test('Home button click calls router.back', () => {
  const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
  const pushMock = jest.fn();
  routerMock.mockReturnValue({ push: pushMock });

  const { getByText } = renderWithProvider(<Tooltip />);
  const homeButton = getByText('homeBtn');
  fireEvent.click(homeButton);

  expect(pushMock).toHaveBeenCalledTimes(1);
});

test('Back button has correct background color when disabled', () => {
  const { getByText } = renderWithProvider(<Tooltip disabledActions={{ back: true }} />);
  const backButton = getByText('backBtn');
  expect(backButton).toHaveStyle('background-color: rgb(42, 42, 42)');
});

test('Home button has correct background color when disabled', () => {
  const { getByText } = renderWithProvider(<Tooltip disabledActions={{ home: true }} />);
  const homeButton = getByText('homeBtn');
  expect(homeButton).toHaveStyle('background-color: transparent');

  fireEvent.mouseEnter(homeButton);
  expect(homeButton).toHaveStyle('background-color: transparent');
});

test('Back button changes background color on hover', () => {
  const { getByText } = renderWithProvider(<Tooltip />);
  const backButton = getByText('backBtn');

  fireEvent.mouseEnter(backButton);
  expect(backButton).toHaveStyle('background-color: rgb(177, 177, 249)');

  fireEvent.mouseLeave(backButton);
  expect(backButton).toHaveStyle('background-color: rgb(133, 133, 246)');
});

test('Home button changes background color on hover', () => {
  const { getByText } = renderWithProvider(<Tooltip />);
  const homeButton = getByText('homeBtn');

  fireEvent.mouseEnter(homeButton);
  expect(homeButton).toHaveStyle('background-color: rgb(22, 22, 22)');

  fireEvent.mouseLeave(homeButton);
  expect(homeButton).toHaveStyle('background-color: transparent');
});

test('Open button changes background color on hover', () => {
  const { container } = renderWithProvider(<Tooltip />);
  const openButton = container.getElementsByClassName('openBtn')[0];

  fireEvent.mouseEnter(openButton);
  expect(openButton).toHaveStyle('background-color: rgb(177, 177, 249)');

  fireEvent.mouseLeave(openButton);
  expect(openButton).toHaveStyle('background-color: rgb(133, 133, 246)');
});

test('Open and close buttons actions', () => {
  const { container } = renderWithProvider(<Tooltip />);
  const openButton = container.getElementsByClassName('openBtn')[0];
  const closeButton = container.getElementsByClassName('closeBtn')[0];

  expect(openButton.classList).not.toContain('active');

  fireEvent.click(closeButton);

  expect(openButton.classList).toContain('active');
  expect(document.body.style.paddingBottom).toBe('0px');

  fireEvent.click(openButton);

  expect(openButton.classList).not.toContain('active');
});

test('tooltipContainer element has class dark when is in dark mode', () => {
  const useColorsMock = jest.spyOn(require('@codegouvfr/react-dsfr/useColors'), 'useColors');
  useColorsMock.mockReturnValue({ isDark: true });

  const { container } = renderWithProvider(<Tooltip />);
  const tooltipContainer = container.getElementsByClassName('tooltipContainer')[0];

  expect(tooltipContainer.classList).toContain('dark');
});

test('tooltipContainer element has info', async () => {
  const { getByText } = renderWithProvider(<Tooltip />, {
    user: { firstName: 'John', lastName: 'Doe', isFranceConnectAuth: false, description: 'John Doe, inventor' },
    type: 'transport',
  });
  await waitFor(() => {
    const authFranceConnectElement = getByText('transport | withoutFranceConnect');
    expect(authFranceConnectElement).toBeInTheDocument();
    const description = getByText('John Doe, inventor');
    expect(description).toBeInTheDocument();
  });
});

test('tooltipContainer element has info from local storage', async () => {
  (window.localStorage.getItem as jest.Mock).mockReturnValueOnce(
    JSON.stringify({
      user: {
        firstName: 'Alexander',
        lastName: 'Doe',
        isFranceConnectAuth: true,
        description: 'Alexander Doe, cosmonaut',
      },
      type: 'canteen',
    }),
  );
  const { getByText } = renderWithProvider(<Tooltip />);
  await waitFor(() => {
    const authFranceConnectElement = getByText('canteen | withFranceConnect');
    expect(authFranceConnectElement).toBeInTheDocument();
    const description = getByText('Alexander Doe, cosmonaut');
    expect(description).toBeInTheDocument();
  });
});

test('tooltipContainer element with use case', async () => {
  const { getByText } = renderWithProvider(<Tooltip />, {
    user: null,
    type: 'transport',
  });
  await waitFor(() => {
    expect(getByText('useCase :')).toBeInTheDocument();
    expect(getByText('transport')).toBeInTheDocument();
  });
});
