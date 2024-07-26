import BookmarkList from '@components/Page/MyPage/BookmarkList';
import TabBar from '@components/common/TabBar';
import UserInfo from '@components/common/UserInfo';

const userData = {
  nickname: 'Hemdi',
  email: 'suminhesam@gmail.com',
  profileImageUrl: '/assets/images/main.svg',
};

const MyPage = () => {
  return (
    <>
      <UserInfo {...userData} />
      <BookmarkList />
    </>
  );
};

export default MyPage;
