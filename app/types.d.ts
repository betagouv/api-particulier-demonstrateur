export type User = {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  description: string | null;
  isFranceConnectAuth: Boolean;
  jobSeeker?: Boolean | undefined;
  student?: Boolean | undefined;
  qfMSA?: number | undefined;
} | null;

export type Journey = {
  user: User;
  type: string | null;
} | null;
