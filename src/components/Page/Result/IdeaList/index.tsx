import { deleteIdea } from '@apis/idea';
import Accordion from '@components/common/Accordion';
import BookmarkIcon from '@components/common/Icon/BookmarkIcon';
import ItemList from '@components/common/ItemList';
import { notify } from '@components/common/Toast';
import LoginModal from '@components/Page/Login/LoginModal';
import { COOKIE_NAME } from '@constants/cookieName';
import { getCookie } from 'cookies-next';
import { useState } from 'react';

interface IdeaListProps {
  contentList: string[];
  iconColor?: `#${string}`;
  onClick: (text: string) => Promise<string>;
}

const IDEA_LIST_TITLE = '주제와 유사한 아이디어를 가져왔어요!';

const IdeaList = ({ contentList, onClick }: IdeaListProps) => {
  return (
    <Accordion title={IDEA_LIST_TITLE}>
      <ItemList
        itemList={contentList.map((text, index) => (
          <Item text={text} onClick={onClick} key={text + index} />
        ))}
      />
    </Accordion>
  );
};

interface ItemProps {
  text: string;
  onClick: (text: string) => Promise<string>;
}

const Item = ({ text, onClick }: ItemProps) => {
  const [bookmarkId, setBookmarkId] = useState<string | null>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleOncClick = async () => {
    const token = getCookie(COOKIE_NAME.ACCESS);

    if (!token) {
      setIsShow(true);
      return;
    }

    if (bookmarkId) {
      deleteIdea(bookmarkId).then(() => {
        notify.success('아이디어의 북마크가 해제되었습니다!');
        setBookmarkId(null);
      });
      return;
    }

    const id = await onClick(text);
    setBookmarkId(id);
  };
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <span>{text}</span>
      <div className="cursor-pointer" onClick={handleOncClick}>
        <BookmarkIcon isChecked={bookmarkId !== null} color="#A5A5A7" />
      </div>
      <LoginModal
        warningText={'아이디어를 북마크하려면'}
        isShow={isShow}
        clickModal={() => setIsShow((prev) => !prev)}
      />
    </div>
  );
};

export default IdeaList;
