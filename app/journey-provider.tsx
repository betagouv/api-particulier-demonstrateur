'use client';

import { JourneyContextType, ProviderProps } from '@/app/interfaces';
import { createContext, useState, useContext, useEffect, useRef } from 'react';
import { Journey } from '@/app/types';
export const initialJourney: Journey = { user: null, type: null };

const JourneyContext = createContext<JourneyContextType | null>(null);

export const useJourney = (): JourneyContextType => {
  const context = useContext(JourneyContext);

  if (!context) {
    throw new Error('Please use Provider in parent component');
  }

  return context;
};
export default function Provider({ children, value }: ProviderProps) {
  const [journey, setJourney] = useState<Journey>(value || initialJourney);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('user-journey');
      if (isInitialRender.current) {
        if (storedValue) {
          setJourney(JSON.parse(storedValue));
        }
        isInitialRender.current = false;
      }
    }
  }, []);

  useEffect(() => {
    if (!isInitialRender.current) {
      if (journey) {
        localStorage.setItem('user-journey', JSON.stringify(journey));
      } else {
        localStorage.removeItem('user-journey');
      }
    }
  }, [journey]);

  return <JourneyContext.Provider value={{ journey, setJourney }}>{children}</JourneyContext.Provider>;
}
