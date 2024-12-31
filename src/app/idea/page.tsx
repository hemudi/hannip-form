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
      <Layout.Main>
        <IdeaForm setIsDone={setIsDone} />
      </Layout.Main>
      <Layout.BottomMenu>
        <Link
          className={`${isDone ? '' : 'pointer-events-none'}`}
          aria-disabled={!isDone}
          href={ROUTING_PATH.IDEA_RESULT}
        >
          <Button disabled={!isDone}>아이디어 생성하기</Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default IdeaPage;
