'use client';

import Button from '@components/common/Button';
import Layout from '@components/Layout';
import IdeaForm from '@components/Page/Idea/IdeaForm';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';
import { useState } from 'react';

const IdeaPage = () => {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <>
      <Layout.Main isSpacing={false}>
        <IdeaForm setIsDone={setIsDone} />
      </Layout.Main>
      <Layout.BottomMenu>
        <Link
          className={`w-full ${isDone ? '' : 'pointer-events-none'}`}
          aria-disabled={!isDone}
          href={ROUTING_PATH.IDEA_RESULT}
        >
          <Button size="full" disabled={!isDone}>
            아이디어 생성하기
          </Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default IdeaPage;
