import Icon, { IconType } from '@components/common/Icon';

interface ItemProps {
  text: string;
  iconType: IconType;
}

const Item = ({ text, iconType }: ItemProps) => {
  return (
    <div className="flex items-center">
      <span>{text}</span>
      <div className="cursor-pointer">
        <Icon type={iconType} />
      </div>
    </div>
  );
};

export default Item;
