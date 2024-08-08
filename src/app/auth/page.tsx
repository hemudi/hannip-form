'use client';

import { ROUTING_PATH } from '@constants/routingPath';
import { getCookie, setCookie } from 'cookies-next';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthCallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    setCookie('token', code);
    if (getCookie('token')) {
      router.replace(ROUTING_PATH.ONBOARDING);
    } else {
      router.replace(ROUTING_PATH.NOT_FOUND);
    }
  }, []);

  return null;
};

export default AuthCallbackPage;
