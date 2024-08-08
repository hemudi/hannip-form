import axios from 'axios';
import { getCookie } from 'cookies-next';

const AUTH_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/auth`;

export const AUTH_URL_PATH = {
  LOG_IN: {
    KAKAO: `${AUTH_API_URL}/kakao/callback`,
    NAVER: `${AUTH_API_URL}/naver/login`,
  },
  LOG_OUT: `${AUTH_API_URL}/logout`,
};

export const deleteAccount = async () => {
  const token = getCookie('token');
  const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_FE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
