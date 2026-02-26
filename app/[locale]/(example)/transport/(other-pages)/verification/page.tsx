import { Suspense } from 'react';
import Loading from './loading';
import Status from '@/components/Status';
import { getUserInfo } from '@/services/users';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { user, scope } = await searchParams;
  const status = await getUserInfo(user, scope);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Status status={status} />
      </Suspense>
    </>
  );
}
