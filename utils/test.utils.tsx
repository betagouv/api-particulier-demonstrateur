import React from 'react';
import { render } from '@testing-library/react';
import Provider from '@/app/journey-provider';

const customRender = (ui: React.ReactElement, options?: any) => render(ui, { wrapper: Provider, ...options });

export * from '@testing-library/react';

export { customRender as renderWithProvider };
