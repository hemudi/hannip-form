'use client';

import useSession from '@hooks/useSession';
import { useEffect } from 'react';

export const SessionChecker = ({ sessionId }: { sessionId: string | null }) => {
  const { isConnected, routeSessionPage, setSessionId } = useSession();

  useEffect(() => {
    setSessionId(sessionId);
    console.log(
      'session cookie : ' +
        (sessionId === null || sessionId === '' || sessionId === undefined
          ? 'no cookie!'
          : sessionId),
    );
  }, [sessionId]);

  // useEffect(() => {
  //   routeSessionPage();
  // }, [isConnected]);

  return null;
};
