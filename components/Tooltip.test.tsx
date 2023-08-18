import { render, fireEvent } from '@testing-library/react';
import Tooltip from './Tooltip';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
}));
jest.mock('@codegouvfr/react-dsfr/useColors', () => ({
  useColors: () => {
    return { isDark: false };
  },
}));

test('Tooltip component should render correctly', () => {
  const { getByText } = render(<Tooltip />);

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

  const { getByText } = render(<Tooltip />);
  const backButton = getByText('backBtn');
  fireEvent.click(backButton);

  expect(backMock).toHaveBeenCalledTimes(1);
});

test('Home button click calls router.back', () => {
  const routerMock = jest.spyOn(require('next/navigation'), 'useRouter');
  const pushMock = jest.fn();
  routerMock.mockReturnValue({ push: pushMock });

  const { getByText } = render(<Tooltip />);
  const homeButton = getByText('homeBtn');
  fireEvent.click(homeButton);

  expect(pushMock).toHaveBeenCalledTimes(1);
});

test('Back button has correct background color when disabled', () => {
  const { getByText } = render(<Tooltip disabledActions={{ back: true }} />);
  const backButton = getByText('backBtn');
  expect(backButton).toHaveStyle('background-color: rgb(42, 42, 42)');
});

test('Home button has correct background color when disabled', () => {
  const { getByText } = render(<Tooltip disabledActions={{ home: true }} />);
  const homeButton = getByText('homeBtn');
  expect(homeButton).toHaveStyle('background-color: transparent');

  fireEvent.mouseEnter(homeButton);
  expect(homeButton).toHaveStyle('background-color: transparent');
});

test('Back button changes background color on hover', () => {
  const { getByText } = render(<Tooltip />);
  const backButton = getByText('backBtn');

  fireEvent.mouseEnter(backButton);
  expect(backButton).toHaveStyle('background-color: rgb(177, 177, 249)');

  fireEvent.mouseLeave(backButton);
  expect(backButton).toHaveStyle('background-color: rgb(133, 133, 246)');
});

test('Home button changes background color on hover', () => {
  const { getByText } = render(<Tooltip />);
  const homeButton = getByText('homeBtn');

  fireEvent.mouseEnter(homeButton);
  expect(homeButton).toHaveStyle('background-color: rgb(22, 22, 22)');

  fireEvent.mouseLeave(homeButton);
  expect(homeButton).toHaveStyle('background-color: transparent');
});

test('Open button changes background color on hover', () => {
  const { container } = render(<Tooltip />);
  const openButton = container.getElementsByClassName('openBtn')[0];

  fireEvent.mouseEnter(openButton);
  expect(openButton).toHaveStyle('background-color: rgb(177, 177, 249)');

  fireEvent.mouseLeave(openButton);
  expect(openButton).toHaveStyle('background-color: rgb(133, 133, 246)');
});

test('Open and close buttons actions', () => {
  const { container } = render(<Tooltip />);
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

  const { container } = render(<Tooltip />);
  const tooltipContainer = container.getElementsByClassName('tooltipContainer')[0];

  expect(tooltipContainer.classList).toContain('dark');
});
