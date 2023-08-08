/**
 * @jest-environment node
 */

import { GET } from './route';

describe('GET', () => {
  it('should return url from environment variables', async () => {
    const result = await GET();
    const data = await result.json();

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  });
});
