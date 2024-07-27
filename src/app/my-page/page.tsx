import { createIdea } from '@api/clova';
import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/common/UserInfo';

const userData = {
  nickname: '한입폼',
  email: 'hannip-form@example.com',
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
