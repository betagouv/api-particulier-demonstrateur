import { Journey } from '@/app/types';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface JourneyContextType {
  journey: Journey;
  setJourney: Dispatch<SetStateAction<Journey>>;
}

export interface ProviderProps {
  children: ReactNode;
  value?: Journey;
}
