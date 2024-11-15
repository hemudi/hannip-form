import { ReactNode } from 'react';

interface ItemListProps {
  itemList: ReactNode[];
}

const ItemList = ({ itemList }: ItemListProps) => {
  return (
    <div className="flex w-full select-none flex-col gap-2.5 overflow-y-auto bg-white scrollbar-hide">
      {itemList.map((item, index) => (
        <div
          key={index}
          className="flex w-full cursor-default items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-5 py-4 text-body1 text-black"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
