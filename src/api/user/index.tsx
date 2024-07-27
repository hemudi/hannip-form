const USER_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

import { cookies } from 'next/headers';

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

export const getUser = async () => {
  const cookie = await getCookie('connect.sid');
  const res = await fetch(USER_API_URL, {
    // headers: {
    //   Cookie: `connect.sid=${cookie};`,
    // },
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  console.log(res);
  return res.json();
};
