import { deleteCookie, getCookie } from 'cookies-next';

export const COOKIE_NAME = {
  ACCESS_TOKEN: 'access_token',
};

const getAccessTokenCSR = () => {
  try {
    const token = getCookie(COOKIE_NAME.ACCESS_TOKEN);
    return token;
  } catch {
    throw new Error('[CSR] Access token not found. Please check your cookie settings.');
  }
};

const getAccessTokenSSR = async () => {
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME.ACCESS_TOKEN)?.value || null;
  return token;
};

export const getAccessToken = async () => {
  const isSSR = typeof window === 'undefined';
  if (!isSSR) {
    const token = getAccessTokenCSR();
    if (token) return token;
  }
  return await getAccessTokenSSR();
};

export const deleteAccessToken = () => {
  try {
    deleteCookie(COOKIE_NAME.ACCESS_TOKEN);
    const token = getCookie(COOKIE_NAME.ACCESS_TOKEN);
    if (token) return false;
    return true;
  } catch {
    throw new Error('[CSR] Access token not found. Please check your cookie settings.');
  }
};
