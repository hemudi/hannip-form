'use client';

import { useState } from 'react';
import ProgressBar from '@components/common/ProgressBar';
import Layout from '@components/Layout';
import Button from '@components/common/Button';
import Question from '@components/Page/Planning/Question';
import questionList from '@components/Page/Planning/Question/QuestionItem';

const BOTTOM_MENU_TEXT = {
  NEXT: '다음',
  CREATE: '스크립트 생성하기!',
};

const PlanningPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleOnClickButton = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questionList.length));
  };

  return (
    <>
      <Layout.Main>
        <div className="flex w-full flex-col items-center justify-center">
          <ProgressBar max={questionList.length} current={currentQuestion + 1} />
        </div>
        <Question index={currentQuestion} />
      </Layout.Main>
      <Layout.BottomMenu>
        <Button onClick={handleOnClickButton}>
          {currentQuestion < questionList.length ? BOTTOM_MENU_TEXT.NEXT : BOTTOM_MENU_TEXT.CREATE}
        </Button>
      </Layout.BottomMenu>
    </>
  );
};

export default PlanningPage;
