export type User = {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  description: string | null;
  isFranceConnectAuth: Boolean;
} | null;

export type Journey = {
  user: User;
  type: string | null;
} | null;
