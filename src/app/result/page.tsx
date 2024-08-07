'use client';

import { createScript } from '@api/clova';
import Layout from '@components/Layout';
import Menu from '@components/Layout/Header/Menu';
import Loading from '@components/Layout/Loading';
import Advice from '@components/Page/Result/Advice';
import IdeaList from '@components/Page/Result/IdeaList';
import Script from '@components/Page/Result/Script';
import ShareMenu from '@components/Page/Result/ShareMenu';
import Button from '@components/common/Button';
import { useScriptAction, useScriptState } from '@store/script';
import Link from 'next/link';
import { bookmarkIdea } from '@api/idea';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useIdeaState } from '@store/idea';
import { ROUTING_PATH } from '@constants/routingPath';
import { useRouter } from 'next/navigation';
import Icon from '@components/common/Icon';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const ResultPage = () => {
  const { ideaList } = useIdeaState();
  const { setScript, clearScriptState } = useScriptAction();
  const { script, advice, ...scriptParams } = useScriptState();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRetry, setIsRetry] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (ideaList.length === 0) {
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

  const handleOnClick = (idea: string) => {
    bookmarkIdea(idea).then(() => {
      toast.success('아이디어가 북마크 되었습니다!');
    });
    return true;
  };

  const handleOnRetryClick = () => {
    setIsRetry(true);
    createScript(scriptParams).then(({ script, advice }) => {
      setScript(script, advice);
      setIsRetry(false);
    });
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
        <Script scriptText={script} onRetry={handleOnRetryClick} isRetry={isRetry} />
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 bg-gray-50 p-4">
          <Advice advice={advice} isRetry={isRetry} />
          <IdeaList contentList={ideaList} onClick={(idea: string) => handleOnClick(idea)} />
          <ShareMenu />
        </div>
      </Layout.Main>
      <Layout.BottomMenu>
        <Link href={ROUTING_PATH.PLANNING}>
          <Button>{BOTTOM_MENU_TEXT}</Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default ResultPage;
