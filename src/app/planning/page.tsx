'use client';

import { useEffect, useState } from 'react';
import ProgressBar from '@components/common/ProgressBar';
import Layout from '@components/Layout';
import Button from '@components/common/Button';
import Question from '@components/Page/Planning/Question';
import questionList from '@components/Page/Planning/Question/QuestionItem';
import { useRouter } from 'next/navigation';
import { ROUTING_PATH } from '@constants/routingPath';
import Menu from '@components/Layout/Header/Menu';
import Icon from '@components/common/Icon';

const BOTTOM_MENU_TEXT = {
  NEXT: '다음',
  CREATE: '스크립트 생성하기!',
};

const PlanningPage = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(true);

  const handleOnClickButton = () => {
    if (currentQuestion + 1 !== questionList.length) {
      setCurrentQuestion((prev) => Math.min(prev + 1, questionList.length));
      setIsDone(false);
      return;
    }
    router.replace(ROUTING_PATH.RESULT);
  };

  const returnToPrevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSetIsDone = ({
    isDone = false,
    isVisible = true,
  }: {
    isDone: boolean;
    isVisible?: boolean;
  }) => {
    setIsDone(isDone);
    setVisible(isVisible);
  };

  return (
    <>
      <Layout.Header
        leftMenu={
          currentQuestion !== 0 && currentQuestion !== 2 ? (
            <div onClick={returnToPrevQuestion}>
              <Icon type="leftDirection" />
            </div>
          ) : null
        }
        rightMenu={<Menu type="close" />}
      />
      <Layout.Main>
        <div className="flex w-full flex-col items-center justify-center">
          <ProgressBar max={questionList.length} current={currentQuestion + 1} />
        </div>
        <Question index={currentQuestion} setIsDone={handleSetIsDone} />
      </Layout.Main>
      {isVisible && (
        <Layout.BottomMenu>
          <Button disabled={!isDone} onClick={handleOnClickButton}>
            {currentQuestion + 1 < questionList.length
              ? BOTTOM_MENU_TEXT.NEXT
              : BOTTOM_MENU_TEXT.CREATE}
          </Button>
        </Layout.BottomMenu>
      )}
    </>
  );
};

export default PlanningPage;
