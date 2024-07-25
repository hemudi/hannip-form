import { ReactNode } from 'react';

interface ItemListProps {
  itemList: ReactNode[];
}

const ItemList = ({ itemList }: ItemListProps) => {
  return (
    <div className="w-97 flex max-h-96 select-none flex-col gap-2.5 overflow-y-auto bg-white p-4">
      {itemList.map((item, index) => (
        <div
          key={index}
          className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-5 py-4 text-body1 text-black"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
