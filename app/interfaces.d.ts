import { Journey } from '@/app/types';

export interface JourneyContextType {
  journey: Journey;
  // eslint-disable-next-line no-unused-vars
  setJourney(value: Journey): void;
}

export interface PageProps {
  children: JSX.Element;
}
