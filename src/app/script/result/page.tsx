'use client';

import { createScript } from '@apis/clova';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import Layout from '@components/Layout';
import Loading from '@components/Layout/Loading';
import Advice from '@components/Page/Result/Advice';
import ShareMenu from '@components/Page/Result/ShareMenu';
import ResultScript from '@components/Page/Script/ResultScript';
import { ROUTING_PATH } from '@constants/routingPath';
import { useScriptAction, useScriptState } from '@store/script';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ScriptResult = () => {
  const router = useRouter();
  const { script, advice, ...scriptParams } = useScriptState();
  const { setScript, clearScriptState } = useScriptAction();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRetry, setIsRetry] = useState<boolean>(false);

  useEffect(() => {
    if (scriptParams.idea.length === 0) {
      clearScriptState();
      router.replace(ROUTING_PATH.NOT_FOUND);
      return;
    }

    createScript(scriptParams).then(({ script, advice }) => {
      setScript(script, advice);
    });
  }, []);

  useEffect(() => {
    if (script !== '' && advice !== '') {
      setIsLoading(false);
    }
  }, [script, advice]);

  const handleOnRetryClick = () => {
    setIsRetry(true);
    setTimeout(
      () =>
        createScript(scriptParams).then(({ script, advice }) => {
          setScript(script, advice);
          setIsRetry(false);
        }),
      1000,
    );
  };

  return isLoading ? (
    <Loading title="스크립트가 구워지고 있어요!" />
  ) : (
    <>
      <Layout.Header
        leftMenu={
          <Link href={ROUTING_PATH.ONBOARDING} replace>
            <Icon type="home" />
          </Link>
        }
        rightMenu={
          <Link href={ROUTING_PATH.MY_PAGE} replace>
            <Icon type="user" />
          </Link>
        }
      />
      <Layout.Main isSpacing={false}>
        <ResultScript scriptText={script} onRetry={handleOnRetryClick} isRetry={isRetry} />
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 bg-gray-50 p-4">
          <Advice advice={advice} isRetry={isRetry} />
          <ShareMenu />
        </div>
      </Layout.Main>
      <Layout.BottomMenu>
        <Link className="w-full" href={ROUTING_PATH.SCRIPT}>
          <Button size="full">{'새로운 스크립트 쓰러가기'}</Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default ScriptResult;
