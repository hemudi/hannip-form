'use client';

import { COOKIE_NAME } from '@constants/cookieName';
import { ROUTING_PATH } from '@constants/routingPath';
import { getCookie, setCookie } from 'cookies-next';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthCallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    setCookie(COOKIE_NAME.ACCESS, code);
    router.replace(ROUTING_PATH.MAIN);
  }, []);

  return null;
};

export default AuthCallbackPage;
