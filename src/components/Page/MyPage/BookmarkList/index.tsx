'use client';

import { BookmarkContent } from '@apis/user';
import Icon from '@components/common/Icon';
import ItemList from '@components/common/ItemList';
import TabBar from '@components/common/TabBar';
import { ROUTING_PATH } from '@constants/routingPath';
import { useRouter } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import { parseScriptTitle } from '@utils/script';
import { deleteScript } from '@apis/script';
import { deleteIdea } from '@apis/idea';

const EmptyMessage = ({ label }: { label: string }) => (
  <div className="flex h-96 w-full flex-col items-center justify-center text-body1 text-gray-700">
    <span>{`앗! 아직 북마크된 ${label}가 없어요!`}</span>
    <span>{`${label}를 만들고 저장하러 가볼까요?`}</span>
  </div>
);
interface BookmarkContentsProps {
  type: 'script' | 'idea';
  bookmarkList: BookmarkContent[];
  deleteContent: (type: 'script' | 'idea', id: string) => void;
}

interface ContentListProps {
  type: 'script' | 'idea';
  contentList: BookmarkContent[];
  title?: string;
  iconColor?: `#${string}`;
  onClick?: () => void;
  onIconClick?: () => void;
}

const BookmarkContents = ({ type, bookmarkList, deleteContent }: BookmarkContentsProps) => {
  const router = useRouter();

  const removeContent = (id: string) => async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteContent(type, id);
  };

  const handleOnClick = (id: string) => {
    type === 'script' && router.push(`${ROUTING_PATH.SCRIPT}/${id}`);
  };

  return bookmarkList && bookmarkList?.length > 0 ? (
    <div className="flex h-fit w-full flex-col gap-4 bg-white px-4 py-6">
      <ItemList
        itemList={bookmarkList.map(({ content, id }) => (
          <div
            className={`flex w-full cursor-pointer items-center justify-between`}
            onClick={() => handleOnClick(id)}
            key={id}
          >
            <span className="truncate-lines whitespace-pre-line">
              {type === 'idea' ? content : parseScriptTitle(content)}
            </span>
            <div className={`cursor-pointer`} onClick={removeContent(id)}>
              <Icon type={'closeCircle'} />
            </div>
          </div>
        ))}
      />
    </div>
  ) : (
    <EmptyMessage label={type === 'idea' ? '아이디어' : '스크립트'} />
  );
};

interface BookmarkProps {
  scripts: BookmarkContent[];
  ideas: BookmarkContent[];
}

const BookmarkList = ({ scripts, ideas }: BookmarkProps) => {
  const [scriptList, setScriptList] = useState<BookmarkContent[]>(scripts);
  const [ideaList, setIdeaList] = useState<BookmarkContent[]>(ideas);

  const deleteContent = (type: 'idea' | 'script', id: string) => {
    type === 'script' ? deleteScript(id) : null;

    if (type === 'script') {
      deleteScript(id).then(() => {
        setScriptList((originList) => [
          ...originList.filter(({ id: originId }) => originId !== id),
        ]);
      });
      return;
    }

    deleteIdea(id).then(() => {
      setIdeaList((originList) => [...originList.filter(({ id: originId }) => originId !== id)]);
    });
  };

  return (
    <TabBar
      tabs={[
        {
          label: '스크립트',
          content: (
            <BookmarkContents
              type="script"
              bookmarkList={scriptList}
              deleteContent={deleteContent}
            />
          ),
        },
        {
          label: '아이디어',
          content: (
            <BookmarkContents type="idea" bookmarkList={ideaList} deleteContent={deleteContent} />
          ),
        },
      ]}
    />
  );
};

export default BookmarkList;
