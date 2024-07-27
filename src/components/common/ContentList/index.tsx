import Icon, { IconType } from '@components/common/Icon';
import ItemList from '@components/common/ItemList';
import Item from '@components/common/ItemList/Item';

interface IdeaListProps {
  contentList: string[];
  title?: string;
  iconType: IconType;
}

const ContentList = ({ contentList, title, iconType }: IdeaListProps) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 bg-white px-4 py-6">
      {title && <h4 className="w-full whitespace-pre-line text-h4 font-bold">{title}</h4>}
      <ItemList
        itemList={contentList.map((text) => (
          <div className="flex w-full items-center justify-between">
            <span>{text}</span>
            <div className="cursor-pointer">
              <Icon type={'closeCircle'} color="#C9C9CA" />
            </div>
          </div>
        ))}
      />
    </div>
  );
};

export default ContentList;
