'use client';

import { checkChannelInfo, loginOAuth } from '@apis/user';
import { ROUTING_PATH } from '@constants/routingPath';
import { HISTORY_PATH } from '@hooks/usePathHistory';
import { useSearchParams, useRouter, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthCallbackPage = () => {
  const [prevPath, setPrevPath] = useState<string>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    if (!code || !state) {
      notFound();
    }

    loginOAuth({ code, state })
      .then(() => {
        const storage = globalThis?.sessionStorage;
        if (storage) {
          const storedPrevPath = storage.getItem(HISTORY_PATH.PREV);
          setPrevPath(storedPrevPath || ROUTING_PATH.MAIN);
        }
      })
      .catch(() => {
        notFound();
      });
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
