import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from 'react';

const TOKEN_COOKIE_NAME = 'token';

const useToken = () => {
  const cookies = useCookies();
  const [token, setToken] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = cookies.get(TOKEN_COOKIE_NAME);
    if (!token) {
      clearState();
      return;
    }

    setToken(cookies.get(TOKEN_COOKIE_NAME) || null);
    setIsLogin(true);
  }, []);

  const clearState = () => {
    setToken(null);
    setIsLogin(false);
  };

  const deleteToken = () => {
    const token = cookies.get(TOKEN_COOKIE_NAME);
    if (!token) {
      clearState();
      return;
    }
    setToken(null);
    setIsLogin(false);
    cookies.remove(TOKEN_COOKIE_NAME);
  };

  return { token, isLogin, deleteToken };
};

export default useToken;
