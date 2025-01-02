'use client';

import { createIdea } from '@apis/clova';
import Button from '@components/common/Button';
import Layout from '@components/Layout';
import Loading from '@components/Layout/Loading';
import IdeaList from '@components/Page/Idea/IdeaList';
import { ROUTING_PATH } from '@constants/routingPath';
import { useIdeaAction, useIdeaState } from '@store/idea';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { toast } from 'react-toastify';

const IdeaResultPage = () => {
  const router = useRouter();
  const { content, isReflectedChannelInfo, selectedIdea, ideaList } = useIdeaState();
  const { clearIdeaState, setIdeaState } = useIdeaAction();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (content.length === 0) {
      clearIdeaState();
      router.replace(ROUTING_PATH.NOT_FOUND);
      return;
    }
  }, []);

  useEffect(() => {
    createIdea({ content, isReflectedChannelInfo })
      .then((result) => {
        setIdeaState({ ideaList: result });
        setIsLoading(false);
      })
      .catch(() => {
        toast.error('아이디어 생성에 실패했습니다!');
        router.replace(ROUTING_PATH.NOT_FOUND);
      });
  }, []);

  if (isLoading) {
    return <Loading title="아이디어가 구워지고 있습니다!" />;
  }

  if (!isLoading && ideaList.length > 0)
    return (
      <>
        <Layout.Main>
          <div className="flex h-full w-full flex-col items-center">
            <h1 className="w-full pb-8 text-h3 font-semibold">아이디어가 완성되었어요!</h1>
            <div className="w-full pb-2 text-body1 font-semibold text-gray-900">
              이 중에 하나를 골라주세요
            </div>
            <IdeaList ideaList={ideaList} />
          </div>
        </Layout.Main>
        <Layout.BottomMenu>
          <Link className="h-full w-full" href={ROUTING_PATH.MAIN}>
            <Button size="full">홈으로 돌아가기</Button>
          </Link>
          <Link className={`h-full w-full`} href={ROUTING_PATH.SCRIPT}>
            <Button size="full" disabled={selectedIdea.length === 0}>
              스크립트 생성하러 가기
            </Button>
          </Link>
        </Layout.BottomMenu>
      </>
    );
};

export default IdeaResultPage;
