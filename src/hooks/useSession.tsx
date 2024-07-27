import { ROUTING_PATH } from '@constants/routingPath';
import { useSessionAction, useSessionState } from '@store/session';
import { isSessionConnected } from '@utils/getCookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useSession = () => {
  const router = useRouter();
  const actions = useSessionAction();
  const { sessionId } = useSessionState();
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    setIsConnected(() => isSessionConnected(sessionId));
  }, [sessionId]);

  const routeSessionPage = () => {
    // 현재 경로에 따라 처리 필요
    const routePath = isConnected ? ROUTING_PATH.ONBOARDING : ROUTING_PATH.MAIN;
    router.replace(routePath);
  };

  return { sessionId, isConnected, routeSessionPage, ...actions };
};

export default useSession;
