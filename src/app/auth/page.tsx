'use client';

import { checkChannelInfo } from '@apis/user';
import { COOKIE_NAME } from '@constants/cookieName';
import { ROUTING_PATH } from '@constants/routingPath';
import { HISTORY_PATH } from '@hooks/usePathHistory';
import { setCookie } from 'cookies-next';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthCallbackPage = () => {
  const [prevPath, setPrevPath] = useState<string>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    setCookie(COOKIE_NAME.ACCESS, code);
    const storage = globalThis?.sessionStorage;
    if (storage) {
      const storedPrevPath = storage.getItem(HISTORY_PATH.PREV);
      setPrevPath(storedPrevPath || ROUTING_PATH.MAIN);
    }
  }, []);

  useEffect(() => {
    if (!prevPath) return;

    if (prevPath === ROUTING_PATH.LOGIN) {
      checkChannelInfo().then((isExist) => {
        if (isExist) {
          router.replace(ROUTING_PATH.MAIN);
        } else {
          router.replace(ROUTING_PATH.CHANNEL_INFO);
        }
      });
      return;
    }

    router.replace(prevPath);
  }, [prevPath]);

  return null;
};

export default AuthCallbackPage;
