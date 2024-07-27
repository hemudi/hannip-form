'use client';

import Layout from '@components/Layout';
import Script from '@components/Page/Result/Script';
import Button from '@components/common/Button';
import ContentList from '@components/common/ContentList';
import { ROUTING_PATH } from '@constants/routingPath';
import { useIdeaState } from '@store/idea';
import { useScriptState } from '@store/script';
import Link from 'next/link';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const ResultPage = () => {
  const { script } = useScriptState();
  const { ideaList } = useIdeaState();
  return (
    <>
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
  );
};

export default ResultPage;
