import { createIdea } from '@api/clova';
import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/common/UserInfo';

const userData = {
  nickname: 'Hemdi',
  email: 'suminhesam@gmail.com',
  profileImageUrl: '/assets/images/main.svg',
};

const MyPage = async () => {
  return (
    <>
      <UserInfo {...userData} />
      <BookmarkList />
    </>
  );
};

export default MyPage;
