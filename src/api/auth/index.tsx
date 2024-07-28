import { getCookieToDocument } from '@utils/cookie/client';
import axios from 'axios';

const AUTH_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export const AUTH_URL_PATH = {
  LOG_IN: {
    KAKAO: `${AUTH_API_URL}/kakao/callback`,
    NAVER: `${AUTH_API_URL}/naver/login`,
  },
  LOG_OUT: `${AUTH_API_URL}/logout`,
};

export const loginKakao = async (token: string) => {
  const res = (await axios.get(`${process.env.NEXT_PUBLIC_FE_URL}/auth/${token}`)).data;
  return res;
};

export const deleteAccount = async () => {
  const token = await getCookieToDocument('token');
  const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
