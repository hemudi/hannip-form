import { cookies } from 'next/headers';

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

const deleteCookie = async (name: string) => {
  return cookies().delete(name);
};

const TOKEN_COOKIE_NAME = 'token';

export const getTokenCookie = async () => await getCookie(TOKEN_COOKIE_NAME);
export const deleteTokenCookie = async () => await deleteCookie(TOKEN_COOKIE_NAME);
