'use client';

import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import TipBanner from '@components/common/TipBanner';
import Layout from '@components/Layout';
import ScriptForm from '@components/Page/Script/ScriptForm';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';
import { useState } from 'react';

const ScriptPage = () => {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <>
      <Layout.Header
        leftMenu={
          <Link href={ROUTING_PATH.MAIN}>
            <Icon type="leftDirection" />
          </Link>
        }
        title="스크립트 생성"
      />
      <Layout.Main isSpacing={false}>
        <TipBanner type="script" />
        <ScriptForm setIsDone={setIsDone} />
      </Layout.Main>
      <Layout.BottomMenu>
        <Link
          className={`w-full ${isDone ? '' : 'pointer-events-none'}`}
          aria-disabled={!isDone}
          href={ROUTING_PATH.SCRIPT_RESULT}
        >
          <Button disabled={!isDone}>스크립트 생성하기</Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default ScriptPage;
