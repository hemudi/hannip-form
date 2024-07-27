import { cookies } from 'next/headers';

const SESSION_ID_NAME = 'connect.sid';

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

export const getSessionCookie = async () => await getCookie(SESSION_ID_NAME);

export default getCookie;
