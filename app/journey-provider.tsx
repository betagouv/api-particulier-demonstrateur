'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { JourneyContextType, ProviderProps } from '@/app/interfaces';
import { Journey, User } from '@/app/types';
import { users } from '@/app/users';

export const initialJourney: Journey = { user: null, type: null };

const JourneyContext = createContext<JourneyContextType | null>(null);

const hasSegmentInURL = (segment: string, currentPath: string): boolean => {
  return currentPath.includes(segment);
};

export const useJourney = (): JourneyContextType => {
  const context = useContext(JourneyContext);

  if (!context) {
    throw new Error('Please use Provider in parent component');
  }

  return context;
};

const objectsAreEqual = (obj1: any, obj2: any): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const getTypeFromPathname = (pathname: string): 'transport' | 'cantine' | undefined => {
  if (hasSegmentInURL('transport', pathname)) return 'transport';
  if (hasSegmentInURL('cantine', pathname)) return 'cantine';
  return undefined;
};

const Provider: React.FC<ProviderProps> = ({ children, value }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [journey, setJourney] = useState<Journey>(value || initialJourney);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let newJourney = { ...(journey || initialJourney) };

      switch (getTypeFromPathname(pathname)) {
        case 'transport':
          newJourney.type = 'transport';
          break;
        case 'cantine':
          newJourney.type = 'cantine';
          break;
        default:
          break;
      }

      const getUserProfile = (id: string): User => {
        const user = users.find((user) => user.id === id);
        return user || null;
      };

      const user = searchParams.get('user') || '';
      newJourney.user = getUserProfile(user);

      if (!objectsAreEqual(newJourney, journey)) {
        setJourney(newJourney);
      }
    }
  }, [journey, searchParams, pathname]);

  return <JourneyContext.Provider value={{ journey, setJourney }}>{children}</JourneyContext.Provider>;
};

export default Provider;
