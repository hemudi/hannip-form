'use client';

import ContentList from '@components/common/ContentList';
import TabBar from '@components/common/TabBar';
import { useState } from 'react';

const EmptyMessage = ({ label }: { label: string }) => (
  <div className="flex h-96 w-full flex-col items-center justify-center text-body1 text-gray-700">
    <span>{`앗! 아직 북마크된 ${label}가 없어요!`}</span>
    <span>{`${label}를 만들고 저장하러 가볼까요?`}</span>
  </div>
);

const ideaList = [
  '10분 안에 끝내는 데일리 메이크업',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
];

const BookmarkContents = ({ type }: { type: 'script' | 'idea' }) => {
  const [contentList, setScriptList] = useState<string[]>([...ideaList, ...ideaList]);

  return contentList?.length > 0 ? (
    <ContentList contentList={contentList} />
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
