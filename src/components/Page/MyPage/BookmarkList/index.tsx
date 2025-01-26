'use client';

import { BookmarkContent, getUser } from '@apis/user';
import Icon from '@components/common/Icon';
import ItemList from '@components/common/ItemList';
import TabBar from '@components/common/TabBar';
import { ROUTING_PATH } from '@constants/routingPath';
import { useRouter, useSearchParams } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import { parseScriptTitle } from '@utils/script';
import { deleteScript } from '@apis/script';
import { deleteIdea } from '@apis/idea';
import Modal from '@components/common/Modal';
import Button from '@components/common/Button';

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

const BookmarkContents = ({ type, bookmarkList, deleteContent }: BookmarkContentsProps) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const removeContent = () => {
    if (selectedItem) {
      deleteContent(type, selectedItem);
      setIsShow(false);
      setSelectedItem(null);
      return;
    }
  };

  const handleOnClick = (id: string) => {
    type === 'script' && router.push(`${ROUTING_PATH.DETAIL_SCRIPT}/${id}`);
  };

  const handleOnDelete = (id: string) => async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsShow(true);
    setSelectedItem(id);
  };

  return bookmarkList && bookmarkList?.length > 0 ? (
    <div className="flex h-fit w-full flex-col gap-4 bg-white px-4 py-6">
      <ItemList
        itemList={bookmarkList.map(({ content, id }) => (
          <div
            className={`flex w-full items-center justify-between gap-2 ${type === 'script' ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={() => handleOnClick(id)}
            key={id}
          >
            <span className="truncate-lines whitespace-pre-line">
              {type === 'idea' ? content : parseScriptTitle(content)}
            </span>
            <div className={`cursor-pointer`} onClick={handleOnDelete(id)}>
              <Icon type={'closeCircle'} color="#C9C9CA" />
            </div>
          </div>
        ))}
      />
      {isShow && (
        <Modal title="삭제하시겠습니까?" onClose={() => setIsShow(false)}>
          <Button onClick={removeContent}>삭제하기</Button>
        </Modal>
      )}
    </div>
  ) : (
    <EmptyMessage label={type === 'idea' ? '아이디어' : '스크립트'} />
  );
};

const BookmarkList = () => {
  const [scriptList, setScriptList] = useState<BookmarkContent[]>([]);
  const [ideaList, setIdeaList] = useState<BookmarkContent[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookmarkType = searchParams.get('type') || 0;

  useEffect(() => {
    getUser().then((data) => {
      setScriptList(data.scripts);
      setIdeaList(data.ideas);
    });
  }, []);

  const handleOnChangeTab = (index: number) => {
    router.push(`${ROUTING_PATH.BOOKMARK}/?type=${index}`);
  };

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
      defaultTab={+bookmarkType}
      onChange={handleOnChangeTab}
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
