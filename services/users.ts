const getUserInfo = async (id: string | string[] | undefined, scope: string | string[] | undefined) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/info`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, scope, delay: 5000 }),
    });

    if (!result.ok) {
      throw new Error('Network response was not ok');
    }

    return await result.json();
  } catch (err) {
    console.error('There was a problem fetching the data:', err);
    throw err;
  }
};

export { getUserInfo };
