import { render } from '@testing-library/react';
import Page from './page';

import Tooltip from '@/components/Tooltip';
import Banner from '@/components/Banner';

jest.mock('@/components/Tooltip');
jest.mock('@/components/Banner');

describe('ConnectionConfirmation component', () => {
  it('should render components', async () => {
    const { container, getByText } = render(<Page />);

    const buttonElement = container.querySelector('.fr-btn');
    const headerElement = container.querySelector('.fr-header');
    const lien = container.querySelector('a[href="/verification/succes"]');

    const titleElement = getByText('title');
    const subTitleElement = getByText('subTitle');
    const buttonTextElement = getByText('button');
    const accordionTitleElement = getByText('accordionTitle');

    const accordionContent1Element = getByText('accordionContent1');
    const accordionContent2Element = getByText('accordionContent2');
    const accordionContent3Element = getByText('accordionContent3');
    const accordionContent4Element = getByText('accordionContent4');
    const accordionContent5Element = getByText('accordionContent5');
    const accordionContent6Element = getByText('accordionContent6');
    const accordionContent7Element = getByText('accordionContent7');
    const accordionContent8Element = getByText('accordionContent8');

    expect(lien).toBeInTheDocument();
    expect(buttonElement).toHaveClass('fr-btn');
    expect(headerElement).toHaveClass('fr-header');
    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
    expect(accordionTitleElement).toBeInTheDocument();

    expect(accordionContent1Element).toBeInTheDocument();
    expect(accordionContent2Element).toBeInTheDocument();
    expect(accordionContent3Element).toBeInTheDocument();
    expect(accordionContent4Element).toBeInTheDocument();
    expect(accordionContent5Element).toBeInTheDocument();
    expect(accordionContent6Element).toBeInTheDocument();
    expect(accordionContent7Element).toBeInTheDocument();
    expect(accordionContent8Element).toBeInTheDocument();

    expect(Tooltip).toHaveBeenCalledTimes(1);
    expect(Banner).toHaveBeenCalledTimes(1);
  });
});
