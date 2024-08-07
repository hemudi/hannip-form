import Accordion from '@components/common/Accordion';
import BookmarkIcon from '@components/common/Icon/BookmarkIcon';
import ItemList from '@components/common/ItemList';
import LoginModal from '@components/common/Modal/LoginModal';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface IdeaListProps {
  contentList: string[];
  iconColor?: `#${string}`;
  onClick: (texts: string) => boolean;
}

const IDEA_LIST_TITLE = '주제와 유사한 아이디어를 가져왔어요!';

const IdeaList = ({ contentList, onClick = () => false }: IdeaListProps) => {
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
  onClick: (text: string) => boolean;
}

const Item = ({ text, onClick }: ItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleOncClick = async () => {
    const token = getCookie('token');

    if (!token) {
      setIsShow(true);
      return;
    }

    if (isChecked) {
      toast.success('이미 북마크 된 아이디어 입니다');
      return;
    }
    if (onClick(text)) {
      setIsChecked(true);
    }
  };
  return (
    <div className="flex w-full items-center justify-between">
      <span>{text}</span>
      <div className="cursor-pointer" onClick={handleOncClick}>
        <BookmarkIcon isChecked={isChecked} color="#A5A5A7" />
      </div>
      <LoginModal type={'아이디어'} isShow={isShow} clickModal={() => setIsShow((prev) => !prev)} />
    </div>
  );
};

export default IdeaList;
