'use client';

import { createScript } from '@api/clova';
import Loading from '@components/Layout/Loading';
import { ROUTING_PATH } from '@constants/routingPath';
import { useScriptAction, useScriptState } from '@store/script';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ResultPage = () => {
  const { script, ...scriptParams } = useScriptState();
  const { setScript } = useScriptAction();
  const router = useRouter();

  useEffect(() => {
    createScript(scriptParams).then((data) => {
      const { message, seed } = data.result;
      setScript(message.content, seed);
      router.replace(`${ROUTING_PATH.RESULT}/${seed}`);
    });
  }, []);

  return <Loading title="스크립트가 구워지고 있어요!" />;
};

export default ResultPage;
