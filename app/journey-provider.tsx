'use client';

import { JourneyContextType, PageProps } from '@/app/interfaces';
import { createContext, useState, useContext, useEffect } from 'react';
import { Journey } from '@/app/types';

const initialJourney = { name: '', type: '', description: '', isFranceConnectAuth: false };

const JourneyContext = createContext<JourneyContextType | null>(null);

export const useJourney = (): JourneyContextType => {
  const context = useContext(JourneyContext);

  if (!context) {
    throw new Error('Please use Provider in parent component');
  }

  return context;
};

export default function Provider({ children }: PageProps) {
  const [journey, setJourney] = useState<Journey>(() => {
    if (typeof window === 'undefined') {
      return initialJourney;
    }

    const storedValue = localStorage.getItem('user-journey');
    return storedValue ? JSON.parse(storedValue) : initialJourney;
  });

  useEffect(() => {
    localStorage.setItem('user-journey', JSON.stringify(journey));
  }, [journey]);

  return <JourneyContext.Provider value={{ journey, setJourney }}>{children}</JourneyContext.Provider>;
}
