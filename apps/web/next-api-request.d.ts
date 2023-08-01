// eslint-disable-next-line no-unused-vars
import { NextApiRequest } from 'next';
import { Identity } from '@lib/auth';

declare module 'next' {
  // eslint-disable-next-line no-unused-vars
  interface NextApiRequest {
    identity?: Identity;
  }
}
