import { Journey } from '@/app/types';
import { Dispatch, SetStateAction } from 'react';

export interface JourneyContextType {
  journey: Journey;
  setJourney: Dispatch<SetStateAction<Journey>>;
}

export interface ProviderProps {
  children: JSX.Element;
  value?: Journey;
}
