import React from 'react';
import * as rtl from '@testing-library/react';
import JourneyProvider, { initialJourney } from '@/app/journey-provider';
import { Journey } from '@/app/types';

export const renderWithProvider = (ui: JSX.Element, value: Journey = initialJourney) => {
  return rtl.render(<JourneyProvider value={value}>{ui}</JourneyProvider>);
};

export * from '@testing-library/react';
