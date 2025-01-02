import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/Page/MyPage/UserInfo';

const BookmarkPage = () => {
  return (
    <div className="h-full w-full">
      <UserInfo />
      <BookmarkList />
    </div>
  );
};

export default BookmarkPage;
