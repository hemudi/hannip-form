import BookmarkIcon from '@components/common/Icon/BookmarkIcon';
import ItemList from '@components/common/ItemList';
import { useState } from 'react';

interface IdeaListProps {
  contentList: string[];
  title?: string;
  iconColor?: `#${string}`;
  onClick: (texts: string) => boolean;
}

const ContentList = ({ contentList, title, onClick = () => false }: IdeaListProps) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 bg-white px-4 py-6">
      {title && <h4 className="w-full whitespace-pre-line text-h4 font-bold">{title}</h4>}
      <ItemList
        itemList={contentList.map((text, index) => (
          <Item text={text} onClick={onClick} key={text + index} />
        ))}
      />
    </div>
  );
};

interface ItemProps {
  text: string;
  onClick: (text: string) => boolean;
}

const Item = ({ text, onClick }: ItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleOncClick = () => {
    if (isChecked) return;
    if (onClick(text)) {
      setIsChecked(true);
    }
  };
  return (
    <div className="flex w-full items-center justify-between">
      <span>{text}</span>
      <div className="cursor-pointer" onClick={handleOncClick}>
        <BookmarkIcon isChecked={isChecked} />
      </div>
    </div>
  );
};

export default ContentList;