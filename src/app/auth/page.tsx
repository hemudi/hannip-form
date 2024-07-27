import Loading from '@components/Layout/Loading';
import { SessionChecker } from '@components/Session/SessionChecker';

import { cookies } from 'next/headers';

const SESSION_ID_NAME = 'connect.sid';

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

const AuthCallbackPage = async () => {
  const sessionId = await getCookie(SESSION_ID_NAME);
  return (
    <>
      <Loading title="로그인 중입니다" />
      <SessionChecker sessionId={sessionId} />
    </>
  );
};

export default AuthCallbackPage;
