import Icon from '@components/common/Icon';

const BookmarkIcon = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <Icon
      type={'bookmark'}
      color={isChecked ? '#F95D5D' : '#121212'}
      fill={isChecked ? '#F95D5D' : 'none'}
    />
  );
};

export default BookmarkIcon;
