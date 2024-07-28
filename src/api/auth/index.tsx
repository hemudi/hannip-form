import axios from 'axios';

const AUTH_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export const AUTH_URL_PATH = {
  LOG_IN: {
    KAKAO: `${AUTH_API_URL}/kakao/callback`,
    NAVER: `${AUTH_API_URL}/naver/login`,
  },
  LOG_OUT: `${AUTH_API_URL}/logout`,
  DELETE: `${AUTH_API_URL}/kakao/login`,
};

export const loginKakao = async () => {
  const res = (await axios.get(AUTH_URL_PATH.LOG_IN.KAKAO)).data;
  return res;
};

export const logout = async () => {
  const res = await fetch(AUTH_URL_PATH.LOG_OUT);
};

export const deleteAccount = async () => {
  const res = await fetch(AUTH_URL_PATH.DELETE);
};
