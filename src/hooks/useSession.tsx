import { ROUTING_PATH } from '@constants/routingPath';
import { useSessionAction, useSessionState } from '@store/session';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';

const useSession = () => {
  const router = useRouter();
  const actions = useSessionAction();
  const { sessionId } = useSessionState();
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    setIsConnected(() => (sessionId !== '' && sessionId !== null) || sessionId !== undefined);
  }, [sessionId]);

  const routeSessionPage = () => {
    const routePath = isConnected ? ROUTING_PATH.ONBOARDING : ROUTING_PATH.MAIN;
    router.replace(routePath);
  };

  return { sessionId, isConnected, routeSessionPage, ...actions };
};

export default useSession;
