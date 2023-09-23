/**
 * @jest-environment node
 */

import { POST } from './route';

jest.mock('./route', () => ({
  ...jest.requireActual('./route'),
  delay: jest.fn().mockResolvedValue(undefined),
}));

describe('GET', () => {
  it('should return true when id is 1 and scope job seeker', async () => {
    const result = await POST({
      json: async () => ({ id: '1', scope: 'jobSeeker', delay: 200 }),
    } as any);
    const data = await result.json();

    expect(data).toEqual(true);
  });
  it('should return false when id is 2 and scope is job seeker', async () => {
    const result = await POST({
      json: async () => ({ id: '2', scope: 'jobSeeker' }),
    } as any);
    const data = await result.json();

    expect(data).toEqual(false);
  });
  it('should return 320 when id is 3 and scope', async () => {
    const result = await POST({
      json: async () => ({ id: '3', scope: 'qfMSA' }),
    } as any);
    const data = await result.json();

    expect(data).toEqual(320);
  });
  it('should return 400 error', async () => {
    const result = await POST({
      json: async () => ({}),
    } as any);
    const data = await result.json();

    expect(data).toEqual({ error: 'Missing body params' });
  });
  it('should return error', async () => {
    const result = await POST({
      json: async () => ({ id: '000000000', scope: 'qfMSA' }),
    } as any);
    const data = await result.json();

    expect(data).toEqual({ error: 'This user doesnt exist' });
  });
});
