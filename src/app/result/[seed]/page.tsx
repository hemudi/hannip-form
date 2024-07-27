'use client';

import Layout from '@components/Layout';
import Script from '@components/Page/Result/Script';
import Button from '@components/common/Button';
import ContentList from '@components/common/ContentList';
import { ROUTING_PATH } from '@constants/routingPath';
import { useIdeaState } from '@store/idea';
import { useScriptState } from '@store/script';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const ResultPage = ({ params }: { params: { seed: string } }) => {
  const { script, seed } = useScriptState();
  const { ideaList } = useIdeaState();

  useEffect(() => {
    if (params.seed !== String(seed)) {
      redirect(ROUTING_PATH.NOT_FOUND);
    }
  }, []);

  return (
    params.seed === String(seed) && (
      <>
        <Layout.Header leftMenu="home" rightMenu="myPage" />
        <Layout.Main isSpacing={false}>
          {
            <>
              <Script scriptText={script} />
              <ContentList contentList={ideaList} />
            </>
          }
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
