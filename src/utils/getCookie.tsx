import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SESSION_ID_NAME = 'connect.sid';

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

export const getSessionCookie = async () => await getCookie(SESSION_ID_NAME);

export const isSessionConnected = (sessionCookie: string | null) =>
  sessionCookie !== null && sessionCookie !== '' && sessionCookie !== undefined;

export const sessionRouter = async (isConnect: boolean, path: string) => {
  const sessionCookie = await getSessionCookie();
  if (isConnect === isSessionConnected(sessionCookie)) {
    redirect(path);
  }
};

export default getCookie;
