// 'use client';

// import useSession from '@hooks/useSession';
// import { isSessionConnected } from '@utils/getCookie';
// import { useEffect } from 'react';

// export const SessionChecker = ({ sessionId }: { sessionId: string | null }) => {
//   const { isConnected, routeSessionPage, setSessionId } = useSession();

//   useEffect(() => {
//     setSessionId(sessionId);
//     console.log(sessionId);
//     console.log('session cookie : ' + (isSessionConnected(sessionId) ? 'no cookie!' : sessionId));
//   }, [sessionId]);

//   useEffect(() => {
//     routeSessionPage();
//   }, [isConnected]);

//   return null;
// };
