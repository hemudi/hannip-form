'use client';

import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import Layout from '@components/Layout';
import ScriptForm from '@components/Page/Script/ScriptForm';
import ScriptTipModal from '@components/Page/Script/ScriptTipModal';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';
import { useState } from 'react';

const ScriptPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <>
      <Layout.Header
        rightMenu={
          <Link href={ROUTING_PATH.MAIN}>
            <Icon type="closeCross" />
          </Link>
        }
        title="스크립트 생성"
      />
      <Layout.Main isSpacing={false}>
        <div
          onClick={() => setIsShowModal(true)}
          className="flex w-full cursor-pointer bg-gray-50 p-5"
        >
          <div className="flex w-full flex-col justify-center">
            <span className="text-h4 font-semibold">한입폼 100% 활용하기</span>
            <span>이렇게 작성하면 정확한 답변을 받을 수 있어요</span>
          </div>
          <Icon type="rightDirection" />
        </div>
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
      <ScriptTipModal isOpen={isShowModal} onClose={() => setIsShowModal(false)} />
    </>
  );
};

export default ScriptPage;
