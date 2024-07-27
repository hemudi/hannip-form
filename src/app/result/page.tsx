'use client';

import { createScript } from '@api/clova';
import Layout from '@components/Layout';
import Loading from '@components/Layout/Loading';
import Script from '@components/Page/Result/Script';
import Button from '@components/common/Button';
import ContentList from '@components/common/ContentList';
import { ROUTING_PATH } from '@constants/routingPath';
import { useIdeaState } from '@store/idea';
import { useScriptAction, useScriptState } from '@store/script';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const ResultPage = () => {
  const { script, ...scriptParams } = useScriptState();
  const { setScript } = useScriptAction();
  const router = useRouter();

  useEffect(() => {
    createScript(scriptParams).then((data) => {
      const { message, seed } = data.result;
      setScript(message.content);
      router.replace(`${ROUTING_PATH.RESULT}/${seed}`);
    });
  }, []);

  return <Loading title="스크립트가 구워지고 있어요!" />;
};

export default ResultPage;
