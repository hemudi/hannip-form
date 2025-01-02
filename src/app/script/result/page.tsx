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

    setScript(
      '안녕하세요! 오늘은 초간단 케이크 만드는 방법을 소개해드릴게요.\n먼저, 재료를 준비해주세요. 버터와 설탕을 섞어줍니다. 그런 다음, 계란을 하나씩 넣고 잘 섞어주세요. 바닐라 추출물도 추가합니다. 이제 박력분과 베이킹 파우더를 체에 걸러 넣어주세요. 마지막으로, 우유를 넣고 부드럽게 섞어줍니다.\n반죽이 완성되면 틀에 부어주세요. 180도로 예열된 오븐에서 25분간 구워줍니다.\n구워진 케이크를 식힌 후, 원하는 대로 데코레이션을 해주세요. 맛있는 케이크가 완성되었습니다!\n이제 즐겨보세요! 더 많은 레시피를 원하시면 구독과 좋아요 부탁드려요!',
      '안녕하세요! 오늘은 초간단 케이크 만드는 방법을 소개해드릴게요.\n먼저, 재료를 준비해주세요. 버터와 설탕을 섞어줍니다. 그런 다음, 계란을 하나씩 넣고 잘 섞어주세요. 바닐라 추출물도 추가합니다. 이제 박력분과 베이킹 파우더를 체에 걸러 넣어주세요. 마지막으로, 우유를 넣고 부드럽게 섞어줍니다.\n반죽이 완성되면 틀에 부어주세요. 180도로 예열된 오븐에서 25분간 구워줍니다.\n구워진 케이크를 식힌 후, 원하는 대로 데코레이션을 해주세요. 맛있는 케이크가 완성되었습니다!\n이제 즐겨보세요! 더 많은 레시피를 원하시면 구독과 좋아요 부탁드려요!',
    );

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
