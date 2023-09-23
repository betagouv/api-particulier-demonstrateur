import { Suspense } from 'react';
import Loading from './loading';
import Status from '@/components/Status';
import { getUserInfo } from '@/services/users';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const status = await getUserInfo(searchParams.user, searchParams.scope);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Status status={status} />
      </Suspense>
    </>
  );
}
