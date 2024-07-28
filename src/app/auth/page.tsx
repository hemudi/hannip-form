'use client';

import { loginKakao } from '@api/auth';
import { ROUTING_PATH } from '@constants/routingPath';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthCallbackPage = () => {
  const { replace } = useRouter();
  const params = useSearchParams();
  const code = params.get('code');

  useEffect(() => {
    if (!code || code === '') {
      replace(ROUTING_PATH.NOT_FOUND);
      return;
    }

    loginKakao(code);
    replace(ROUTING_PATH.ONBOARDING);
  }, []);
  return null;
};

export default AuthCallbackPage;
