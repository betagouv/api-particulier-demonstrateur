import { User } from '@/app/types';

export const users: User[] = [
  {
    id: '1',
    firstName: 'Henri',
    lastName: 'Dupont',
    // eslint-disable-next-line quotes
    description: "Henri, demandeur d'emploi",
    isFranceConnectAuth: true,
    jobSeeker: true,
  },
  {
    id: '1',
    firstName: 'Henri',
    lastName: 'Dupont',
    // eslint-disable-next-line quotes
    description: "Henri, demandeur d'emploi",
    isFranceConnectAuth: true,
    jobSeeker: true,
  },
  {
    id: '2',
    firstName: 'Juliette',
    lastName: 'Lejeune',
    description: 'Juliette, étudiante',
    isFranceConnectAuth: false,
    student: true,
  },
  {
    id: '3',
    firstName: 'Camille',
    lastName: 'Dubois',
    description: 'Camille, quotient familial MSA de 320',
    isFranceConnectAuth: true,
    qfMSA: 320,
  },
  {
    id: '4',
    firstName: 'Kevin',
    lastName: 'Durand',
    description: 'Kevin, quotient familial MSA of 750',
    isFranceConnectAuth: false,
    qfMSA: 750,
  },
];
