import { cookies } from 'next/headers';

export const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

export const deleteCookie = async (name: string) => {
  return cookies().delete(name);
};
