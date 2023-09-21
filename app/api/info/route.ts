import { NextResponse } from 'next/server';
import { users } from '@/app/users';

class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    // Set the prototype explicitly to ensure instanceof checks work
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

type Params = {
  id: string;
  scope: string;
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getUserInfo = async ({ id, scope }: Params) => {
  if (!id || !scope) {
    throw new HttpError('Missing body params', 400);
  }
  const user = users.find((user) => user?.id === id);
  if (!user) {
    throw new HttpError('This user doesnt exist', 404);
  }
  return scope in user ? user[scope as keyof typeof user] : false;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await getUserInfo(data);
    await delay(data?.delay ? data.delay : 0);
    return NextResponse.json(result);
  } catch (error) {
    let errorMessage = 'Internal Server Error';
    let statusCode = 500;

    if (error instanceof HttpError) {
      errorMessage = error.message;
      statusCode = error.statusCode;
    }

    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
