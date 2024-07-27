'use server';

// import { SessionChecker } from '@components/Session/SessionChecker';
import { cookies } from 'next/headers';

const SESSION_ID_NAME = 'connect.sid';

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

const Session = async () => {
  const sessionId = await getCookie(SESSION_ID_NAME);
  return <>{/* <SessionChecker sessionId={sessionId} /> */}</>;
};

export default Session;
