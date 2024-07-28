'use client';

import ContentList from '@components/common/ContentList';
import TabBar from '@components/common/TabBar';
import { useState } from 'react';
import { toast } from 'react-toastify';

const EmptyMessage = ({ label }: { label: string }) => (
  <div className="flex h-96 w-full flex-col items-center justify-center text-body1 text-gray-700">
    <span>{`앗! 아직 북마크된 ${label}가 없어요!`}</span>
    <span>{`${label}를 만들고 저장하러 가볼까요?`}</span>
  </div>
);

const scriptList = [
  '제목 : 이것도 1등이니까 럭키비키잖아',
  '제목 : 할머니는 이 일을 기억할 것입니다',
  '제목 : 치명적 모델 그 잡채',
  '제목 : 추구미 뜻을 알라?',
];

const ideaList = [
  '10분 안에 끝내는 데일리 메이크업',
  '마스크 속에서도 빛나는 피부 메이크업',
  '가을맞이 분위기 있는 메이크업',
  '아이돌 메이크업 따라하기',
  '곰손도 금손되는 메이크업',
  '파리의 예술과 문화 탐방',
];

const contentList = {
  script: scriptList,
  idea: ideaList,
};

const BookmarkContents = ({ type }: { type: 'script' | 'idea' }) => {
  return contentList[type]?.length > 0 ? (
    <ContentList
      contentList={contentList[type]}
      iconType="closeCircle"
      onClick={() => {
        toast.dismiss();
        toast.success('업데이트 예정 중입니다! 조금만 기다려주세요!');
      }}
    />
  ) : (
    <EmptyMessage label={type} />
  );
};

const tabs = [
  {
    label: '스크립트',
    content: <BookmarkContents type="script" />,
  },
  { label: '아이디어', content: <BookmarkContents type="idea" /> },
];

const BookmarkList = () => {
  return <TabBar tabs={tabs} />;
};

export default BookmarkList;
