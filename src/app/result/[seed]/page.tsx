'use client';

import { bookmarkIdea } from '@api/idea';
import Layout from '@components/Layout';
import Script from '@components/Page/Result/Script';
import Button from '@components/common/Button';
import { ROUTING_PATH } from '@constants/routingPath';
import { useIdeaState } from '@store/idea';
import { useScriptState } from '@store/script';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Menu from '@components/Layout/Header/Menu';
import Advice from '@components/Page/Result/Advice';
import IdeaList from '@components/Page/Result/IdeaList';
import ShareMenu from '@components/Page/Result/ShareMenu';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const ResultPage = ({ params }: { params: { seed: string } }) => {
  const { script, seed, advice } = useScriptState();
  const { ideaList } = useIdeaState();

  useEffect(() => {
    if (params.seed !== String(seed)) {
      redirect(ROUTING_PATH.NOT_FOUND);
    }
  }, []);

  const handleOnClick = (idea: string) => {
    bookmarkIdea(idea).then(() => {
      toast.success('아이디어가 북마크 되었습니다!');
    });
    return true;
  };

  return (
    params.seed === String(seed) && (
      <>
        <Layout.Header leftMenu={<Menu type="home" />} rightMenu={<Menu type="myPage" />} />
        <Layout.Main isSpacing={false}>
          <Script scriptText={script} />
          <div className="flex h-fit w-full flex-col items-center justify-center gap-4 bg-gray-50 p-4">
            <Advice advice={advice} />
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
    )
  );
};

export default ResultPage;
