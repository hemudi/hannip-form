import Icon from '@components/common/Icon';

interface BookmarkIconProps {
  isChecked: boolean;
  disabled?: boolean;
  color?: `#${string}`;
}

const BookmarkIcon = ({ isChecked, disabled = false, color = '#121212' }: BookmarkIconProps) => {
  return (
    <Icon
      type={'bookmark'}
      color={disabled ? '#FFFFFF' : isChecked ? '#F95D5D' : color}
      fill={disabled ? 'none' : isChecked ? '#F95D5D' : 'none'}
    />
  );
};

export default BookmarkIcon;
