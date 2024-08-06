import Icon from '@components/common/Icon';

interface BookmarkIconProps {
  isChecked: boolean;
  color?: `#${string}`;
}

const BookmarkIcon = ({ isChecked, color = '#121212' }: BookmarkIconProps) => {
  return (
    <Icon
      type={'bookmark'}
      color={isChecked ? '#F95D5D' : color}
      fill={isChecked ? '#F95D5D' : 'none'}
    />
  );
};

export default BookmarkIcon;
