import ItemList from '@components/common/ItemList';
import Item from '@components/common/ItemList/Item';

interface IdeaListProps {
  contentList: string[];
  title?: string;
}

const ContentList = ({ contentList, title }: IdeaListProps) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 bg-white px-4 py-6">
      {title && <h4 className="w-full whitespace-pre-line text-h4 font-bold">{title}</h4>}
      <ItemList
        itemList={contentList.map((text) => (
          <Item text={text} iconType="bookmark" />
        ))}
      />
    </div>
  );
};

export default ContentList;
