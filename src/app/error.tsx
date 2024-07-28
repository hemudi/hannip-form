'use client';

import { ROUTING_PATH } from '@constants/routingPath';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Error = ({ error }: { error: Error }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    router.replace(ROUTING_PATH.NOT_FOUND);
  }, [error]);
};

export default Error;
