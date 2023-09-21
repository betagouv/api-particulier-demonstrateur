import { Suspense } from 'react';
import Loading from './loading';
import Status from '@/components/Status';
import { getUserInfo } from '@/services/users';

export default async function Page({
  searchParams = {},
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const userInfo = await getUserInfo(searchParams.user, searchParams.scope);
  const status = userInfo && userInfo > 0 ? true : false;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Status status={status} />
      </Suspense>
    </>
  );
}
