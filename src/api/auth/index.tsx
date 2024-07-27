const AUTH_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export const AUTH_URL_PATH = {
  LOG_IN: {
    KAKAO: `${AUTH_API_URL}/kakao/login`,
    NAVER: `${AUTH_API_URL}/naver/login`,
  },
  LOG_OUT: `${AUTH_API_URL}/logout`,
  DELETE: `${AUTH_API_URL}/kakao/login`,
};

export const loginKakao = async () => {
  console.log('요청');
  const res = await fetch('http://223.130.161.195:3000/auth/kakao/login');
  if (!res.ok) {
    throw new Error('로그인 실패');
  }
  return res;
};

export const logout = async () => {
  const res = await fetch(AUTH_URL_PATH.LOG_OUT);
};

export const deleteAccount = async () => {
  const res = await fetch(AUTH_URL_PATH.DELETE);
};
